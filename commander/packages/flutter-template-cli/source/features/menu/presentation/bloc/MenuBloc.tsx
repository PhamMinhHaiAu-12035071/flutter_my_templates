import { Bloc } from 'blac';
import {
  MenuEvent,
  MenuEventFetchAll,
  MenuEventLeave,
  MenuEventOnChange,
  MenuEventOnSubmit,
} from './MenuEvent';
import {
  MenuState,
  MenuStateChanging,
  MenuStateChangingError,
  MenuStateConfirmChanged,
  MenuStateFetchAllError,
  MenuStateFetchAllLoaded,
  menuStateInitial,
  MenuStateLeaved,
} from './MenuState';
import { FetchAllMenuItemUseCase } from '../../domain/usecase/FetchAllMenuItemUseCase';
import { fold } from 'fp-ts/Either';
import { GetAllMenuException } from '../../exceptions';
import { MenuItemEntity } from '../../domain/entities/MenuItemEntity';
import { MenuItemModel } from '../../infrastructure/models/MenuItemModel';
import { validate } from 'class-validator';

class MenuBloc extends Bloc<MenuEvent, MenuState> {
  private readonly _fetchAllMenuItemUseCase: FetchAllMenuItemUseCase;

  constructor(fetchAllMenuItemUseCase: FetchAllMenuItemUseCase) {
    super(menuStateInitial);
    this._fetchAllMenuItemUseCase = fetchAllMenuItemUseCase;

    this.on(MenuEventFetchAll, (_, emit) => this._onFetchAll(_, emit));
    this.on(MenuEventOnChange, (event, emit) =>
      this._onChange(event as MenuEventOnChange, emit),
    );
    this.on(MenuEventOnSubmit, (_, emit) => this._onSubmit(_, emit));
    this.on(MenuEventLeave, (_, emit) => this._onLeave(_, emit));
  }

  private async _onFetchAll(
    _: any,
    emit: (arg0: MenuState) => void,
  ): Promise<void> {
    const data = await this._fetchAllMenuItemUseCase.call();
    const newState: MenuState = fold(
      (e: GetAllMenuException): MenuState => {
        return new MenuStateFetchAllError(e.toString());
      },
      (a: Array<MenuItemEntity>): MenuState => {
        return new MenuStateFetchAllLoaded(a as Array<MenuItemModel>);
      },
    )(data);
    emit(newState);
  }

  private async _onChange(
    event: MenuEventOnChange,
    emit: (arg0: MenuState) => void,
  ): Promise<void> {
    const errors = await validate(event);
    if (errors.length > 0) {
      emit(new MenuStateChangingError(this.state.items));
    } else {
      emit(new MenuStateChanging(event.input, this.state.items));
    }
  }

  private async _onSubmit(
    _: any,
    emit: (args0: MenuState) => void,
  ): Promise<void> {
    if (this.state.id) {
      emit(new MenuStateConfirmChanged(this.state.id, this.state.items));
    }
  }

  private async _onLeave(
    _: any,
    emit: (args0: MenuState) => void,
  ): Promise<void> {
    emit(new MenuStateLeaved(this.state.id, this.state.items));
  }
}

export { MenuBloc };

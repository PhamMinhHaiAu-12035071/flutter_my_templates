import { Bloc } from 'blac';
import { MenuEvent, MenuEventFetchAll, MenuEventOnChange } from './MenuEvent';
import {
  MenuState,
  MenuStateChanging,
  MenuStateConfirmChanged,
  MenuStateFetchAllError,
  MenuStateFetchAllLoaded,
  menuStateInitial,
} from './MenuState';
import { FetchAllMenuItemUseCase } from '../../domain/usecase/FetchAllMenuItemUseCase';
import { fold } from 'fp-ts/Either';
import { GetAllMenuException } from '../../exceptions';
import { MenuItemEntity } from '../../domain/entities/MenuItemEntity';
import { MenuItemModel } from '../../infrastructure/models/MenuItemModel';
import { validate } from 'class-validator';
import _ from 'lodash';

class MenuBloc extends Bloc<MenuEvent, MenuState> {
  private readonly _fetchAllMenuItemUseCase: FetchAllMenuItemUseCase;

  constructor(fetchAllMenuItemUseCase: FetchAllMenuItemUseCase) {
    super(menuStateInitial);
    this._fetchAllMenuItemUseCase = fetchAllMenuItemUseCase;

    this.on(MenuEventFetchAll, (_, emit) => this._onFetchAll(_, emit));
    this.on(MenuEventOnChange, (event, emit) =>
      this._onChange(event as MenuEventOnChange, emit),
    );
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
    if (event.key.return && this.state.id) {
      emit(new MenuStateConfirmChanged(this.state.id, this.state.items));
    }
    const errors = await validate(event);
    if (errors.length > 0) {
      emit(new MenuStateChanging('', this.state.items));
    } else {
      const input = `${_.defaultTo(this.state.id, '')}${event.input}`;
      emit(new MenuStateChanging(input, this.state.items));
    }
  }
}

export { MenuBloc };

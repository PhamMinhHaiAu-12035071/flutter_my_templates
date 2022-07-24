import { Bloc } from 'blac';
import {
  LanguageEvent,
  LanguageEventChanged,
  LanguageEventFetchAll,
  LanguageEventMoveDown,
  LanguageEventMoveUp,
} from './LanguageEvent';
import {
  LanguageState,
  LanguageStateChangedSuccess,
  LanguageStateError,
  LanguageStateFocusChanged,
  languageStateInitial,
  LanguageStateLoaded,
} from './LanguageState';
import { fold } from 'fp-ts/Either';
import { FetchAllLanguageUseCase } from '../../domain/usecase/FetchAllLanguageUseCase';
import { GetAllLanguageException } from '../../exceptions';
import { LanguageEntity } from '../../domain/entities/LanguageEntity';
import { LanguageModel } from '../../infrastructure/models/LanguageModel';

class LanguageBloc extends Bloc<LanguageEvent, LanguageState> {
  private readonly _fetchAllLanguageUseCase: FetchAllLanguageUseCase;

  constructor(fetchAllLanguageUseCase: FetchAllLanguageUseCase) {
    super(languageStateInitial);
    this._fetchAllLanguageUseCase = fetchAllLanguageUseCase;

    this.on(LanguageEventFetchAll, (_, emit) =>
      this._onFetchAllLanguages(_, emit),
    );

    this.on(LanguageEventMoveUp, (_, emit) => this._onMoveUp(_, emit));

    this.on(LanguageEventMoveDown, (_, emit) => this._onMoveDown(_, emit));

    this.on(LanguageEventChanged, (_, emit) =>
      this._onLanguageChanged(_, emit),
    );
  }

  private async _getAllLanguages(): Promise<LanguageState> {
    const data = await this._fetchAllLanguageUseCase.call();
    return fold(
      (e: GetAllLanguageException): LanguageState => {
        return new LanguageStateError(e.toString());
      },
      (a: Array<LanguageEntity>): LanguageState => {
        return new LanguageStateLoaded(a as Array<LanguageModel>);
      },
    )(data);
  }

  private async _onFetchAllLanguages(
    _: any,
    emit: (arg0: LanguageState) => void,
  ): Promise<void> {
    const newState: LanguageState = await this._getAllLanguages();
    emit(newState);
  }

  private async _onMoveUp(
    _: any,
    emit: (arg0: LanguageState) => void,
  ): Promise<void> {
    const findIndex: number = this.state.items.selectedIndex;
    if (findIndex !== -1) {
      const size: number = this.state.items.size - 1;
      this.state.items.selectedIndex = findIndex === 0 ? size : findIndex - 1;
      emit(new LanguageStateFocusChanged(this.state.items.arr));
    }
  }

  private async _onMoveDown(
    _: any,
    emit: (arg0: LanguageState) => void,
  ): Promise<void> {
    const findIndex: number = this.state.items.selectedIndex;
    if (findIndex !== -1) {
      const size: number = this.state.items.size - 1;
      this.state.items.selectedIndex = findIndex === size ? 0 : findIndex + 1;
      emit(new LanguageStateFocusChanged(this.state.items.arr));
    }
  }

  private async _onLanguageChanged(
    _: any,
    emit: (arg0: LanguageState) => void,
  ): Promise<void> {
    emit(new LanguageStateChangedSuccess(this.state.items));
  }
}

export { LanguageBloc };

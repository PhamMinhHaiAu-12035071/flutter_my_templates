import { Bloc } from 'blac';
import {
  LanguageEvent,
  LanguageEventFetchAll,
  LanguageEventMoveDown,
  LanguageEventMoveUp,
} from './LanguageEvent';
import {
  LanguageState,
  LanguageStateChanged,
  LanguageStateError,
  languageStateInitial,
  LanguageStateLoaded,
} from './LanguageState';
import { FetchAllLanguageUseCase } from '../../../../domain/usecase/FetchAllLanguageUseCase';
import { GetAllLanguageException } from '../../../../exceptions';
import { LanguageModel } from '../../../../infrastructure/models/LanguageModel';
import { fold } from 'fp-ts/Either';
import { LanguageEntity } from '../../../../domain/entities/LanguageEntity';

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
  ) {
    const newState = await this._getAllLanguages();
    emit(newState);
  }

  private async _onMoveUp(_: any, emit: (arg0: LanguageState) => void) {
    const findIndex = this.state.items.findIndex((item) => item.isSelected);
    if (findIndex !== -1) {
      const size = this.state.items.length - 1;
      const nextIndex = findIndex === 0 ? size : findIndex - 1;

      const newArrSelectedIndex = this.state.items.map((item, index) => {
        if (index === nextIndex) {
          return new LanguageModel(item.id, item.name, item.locale, true);
        }
        return new LanguageModel(item.id, item.name, item.locale, false);
      });

      emit(new LanguageStateChanged(newArrSelectedIndex));
    }
  }

  private async _onMoveDown(_: any, emit: (arg0: LanguageState) => void) {
    const findIndex = this.state.items.findIndex((item) => item.isSelected);
    if (findIndex !== -1) {
      const size = this.state.items.length - 1;
      const nextIndex = findIndex === size ? 0 : findIndex + 1;

      const newArrSelectedIndex = this.state.items.map((item, index) => {
        if (index === nextIndex) {
          return new LanguageModel(item.id, item.name, item.locale, true);
        }
        return new LanguageModel(item.id, item.name, item.locale, false);
      });

      emit(new LanguageStateChanged(newArrSelectedIndex));
    }
  }
}

export { LanguageBloc };

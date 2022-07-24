import { Bloc, BlocObserver } from 'blac';
import {
  NotifyChangeEvent,
  NotifyChangeEventReset,
  NotifyChangeEventSuccess,
} from './NotifyChangeEvent';
import {
  NotifyChangeState,
  NotifyChangeStateInitial,
  notifyChangeStateInitial,
  NotifyChangeStateSuccess,
} from './NotifyChangeState';
import state from '../../../core/state';
import { LanguageBloc } from './LanguageBloc';
import { LanguageStateChangedSuccess } from './LanguageState';

class NotifyChangeBloc extends Bloc<NotifyChangeEvent, NotifyChangeState> {
  constructor() {
    super(notifyChangeStateInitial);

    this.on(NotifyChangeEventReset, (_, emit) =>
      NotifyChangeBloc._onReset(_, emit),
    );

    this.on(NotifyChangeEventSuccess, (_, emit) =>
      NotifyChangeBloc._onSuccess(_, emit),
    );
  }

  public initState(): void {
    state.observer = new BlocObserver({
      onTransition: (bloc, event) => {
        if (
          bloc instanceof LanguageBloc &&
          event.nextState instanceof LanguageStateChangedSuccess
        ) {
          this.add(new NotifyChangeEventSuccess());
        }
      },
    });
  }

  private static async _onReset(
    _: any,
    emit: (arg0: NotifyChangeState) => void,
  ): Promise<void> {
    emit(new NotifyChangeStateInitial());
  }

  private static async _onSuccess(
    _: any,
    emit: (arg0: NotifyChangeState) => void,
  ): Promise<void> {
    emit(new NotifyChangeStateSuccess());
  }
}

export { NotifyChangeBloc };

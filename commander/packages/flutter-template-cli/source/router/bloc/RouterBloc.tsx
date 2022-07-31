import { Bloc } from 'blac';
import {
  RouterEvent,
  RouterEventBack,
  RouterEventNavigateToLanguageScreen,
  RouterEventNavigateToMenuScreen,
} from './RouterEvent';
import {
  RouterState,
  routerStateInitial,
  RouterStateLanguageScreen,
  RouterStateMenuScreen,
} from './RouterState';

class RouterBloc extends Bloc<RouterEvent, RouterState> {
  private _history: Array<RouterState>;

  constructor() {
    super(routerStateInitial);

    this._history = [routerStateInitial];

    this.on(RouterEventNavigateToLanguageScreen, (_, emit) =>
      this._navigateToLanguageScreen(_, emit),
    );
    this.on(RouterEventNavigateToMenuScreen, (_, emit) =>
      this._navigateToMenuScreen(_, emit),
    );
    this.on(RouterEventBack, (_, emit) => this._onBack(_, emit));
  }

  private async _navigateToLanguageScreen(
    _: any,
    emit: (arg0: RouterState) => void,
  ): Promise<void> {
    this._history = this._history.concat(new RouterStateLanguageScreen());
    emit(new RouterStateLanguageScreen());
  }

  private async _navigateToMenuScreen(
    _: any,
    emit: (arg0: RouterState) => void,
  ): Promise<void> {
    this._history = this._history.concat(new RouterStateMenuScreen());
    if (this.lastRouter) {
      emit(this.lastRouter);
    }
  }

  private async _onBack(
    _: any,
    emit: (arg0: RouterState) => void,
  ): Promise<void> {
    if (this.canBack) {
      this._history = this._history.slice(0, -1);
    }
    if (this.lastRouter) {
      emit(this.lastRouter);
    }
  }

  get canBack(): boolean {
    return this._history.length > 0;
  }
  get lastRouter(): RouterState | undefined {
    return this._history[this._history.length - 1];
  }
}

export { RouterBloc };

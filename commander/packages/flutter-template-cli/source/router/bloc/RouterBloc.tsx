import { Bloc } from 'blac';
import {
  RouterEvent,
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
  constructor() {
    super(routerStateInitial);

    this.on(RouterEventNavigateToLanguageScreen, (_, emit) =>
      this._navigateToLanguageScreen(_, emit),
    );
    this.on(RouterEventNavigateToMenuScreen, (_, emit) =>
      this._navigateToMenuScreen(_, emit),
    );
  }

  private async _navigateToLanguageScreen(
    _: any,
    emit: (arg0: RouterState) => void,
  ): Promise<void> {
    emit(new RouterStateLanguageScreen());
  }

  private async _navigateToMenuScreen(
    _: any,
    emit: (arg0: RouterState) => void,
  ): Promise<void> {
    emit(new RouterStateMenuScreen());
  }
}

export { RouterBloc };

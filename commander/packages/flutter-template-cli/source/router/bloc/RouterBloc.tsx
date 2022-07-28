import { Bloc } from 'blac';
import { RouterEvent } from './RouterEvent';
import { RouterState, routerStateInitial } from './RouterState';

class RouterBloc extends Bloc<RouterEvent, RouterState> {
  constructor() {
    super(routerStateInitial);
  }
}

export { RouterBloc };

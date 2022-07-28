import { RouterBloc } from '../bloc/RouterBloc';

function provideRouterBloc(): RouterBloc {
  return new RouterBloc();
}

export { provideRouterBloc };

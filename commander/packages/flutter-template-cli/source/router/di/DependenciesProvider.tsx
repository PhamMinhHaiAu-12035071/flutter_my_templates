import { RouterBloc } from '../bloc/RouterBloc';
import { Container } from 'typedi';

function provideRouterBloc(): RouterBloc {
  return new RouterBloc();
}
function provideBackRouterUseCase(bloc: any): void {
  Container.set('bloc-router', bloc);
}

export { provideRouterBloc, provideBackRouterUseCase };

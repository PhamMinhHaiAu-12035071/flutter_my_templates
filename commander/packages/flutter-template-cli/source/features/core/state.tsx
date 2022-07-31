import { BlacReact } from 'blac';
import { provideRouterBloc } from '../../router/di/DependenciesProvider';
import {
  provideLanguageBloc,
  provideNotifyChangeLanguageBloc,
} from '../languages/di/DependenciesProvider';
import { provideMenuBloc } from '../menu/di/DependenciesProvider';

const state = new BlacReact([
  provideRouterBloc(),
  provideMenuBloc(),
  provideLanguageBloc(),
  provideNotifyChangeLanguageBloc(),
]);
const useBloc: (blocClass: any, options?: any | undefined) => any =
  state.useBloc;

export { useBloc };

export default state;

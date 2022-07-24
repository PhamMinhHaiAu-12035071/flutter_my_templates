import { BlacReact } from 'blac';
import {
  provideLanguageBloc,
  provideNotifyChangeLanguageBloc,
} from '../languages/di/DependenciesProvider';

const state = new BlacReact([
  provideLanguageBloc(),
  provideNotifyChangeLanguageBloc(),
]);
const useBloc: (blocClass: any, options?: any | undefined) => any =
  state.useBloc;

export { useBloc };

export default state;

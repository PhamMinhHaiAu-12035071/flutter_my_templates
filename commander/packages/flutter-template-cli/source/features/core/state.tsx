import { BlacReact } from 'blac';
import { provideLanguageBloc } from '../languages/di/DependenciesProvider';

const state = new BlacReact([provideLanguageBloc()]);
const useBloc: any = state['useBloc'];

// state.observer = new BlocObserver({
//   // onChange is called for all changes (Cubits and Blocs)
//   onChange: (bloc, event) => console.log({ bloc, event }),
//   // onTransition is called only when Blocs transition from one state to another,
//   // it is not called for Cubits
//   onTransition: (bloc, event) => console.log({ bloc, event }),
// });

export { useBloc };

export default state;

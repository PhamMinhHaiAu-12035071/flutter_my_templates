import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../stores';
export declare const useTypedSelector: TypedUseSelectorHook<RootState>;
export declare const useAppDispatch: () => import("redux").Dispatch<import("redux").AnyAction>;

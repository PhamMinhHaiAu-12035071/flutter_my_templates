import { RootState } from '../stores';
export declare function useAppSelector<T>(funcSelector: (state: RootState) => T): T;

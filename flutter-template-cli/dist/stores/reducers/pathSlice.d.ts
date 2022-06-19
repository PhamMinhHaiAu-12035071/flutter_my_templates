import { RootState } from '../index';
import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { ValidationError } from 'fastest-validator';
export declare type StatusPathCombine = Status;
export interface PathState extends BaseState, PerformanceState {
    data: string;
    relativePath: string;
    errors: Array<ValidationError> | undefined;
    status: StatusPathCombine;
}
export declare const setPathSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, setPathFailed: import("@reduxjs/toolkit").ActionCreatorWithPayload<ValidationError[], string>, setPathLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setPath: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
declare const _default: import("redux").Reducer<PathState, import("redux").AnyAction>;
export default _default;
export declare const selectPathStatus: (state: RootState) => StatusPathCombine;
export declare const selectPathErrors: (state: RootState) => Array<ValidationError> | undefined;
export declare const selectPathExecuteTimeSuccess: (state: RootState) => string;
export declare const selectRelativePath: (state: RootState) => string;
export declare const selectPathData: (state: RootState) => string;

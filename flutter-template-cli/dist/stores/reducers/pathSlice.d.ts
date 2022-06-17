import { RootState } from '../index';
import { BaseState } from '../baseState';
import { Status } from '../../constants';
import { ValidationError } from 'fastest-validator';
declare enum StatusPath {
    KEY_PRESS = "KEY_PRESS"
}
export declare type StatusPathCombine = Status | StatusPath;
export interface PathState extends BaseState {
    data: string;
    errors: Array<ValidationError> | undefined;
    status: StatusPathCombine;
}
export declare const setPathSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, setPathFailed: import("@reduxjs/toolkit").ActionCreatorWithPayload<ValidationError[], string>, setPathLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setEmptyError: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<PathState, import("redux").AnyAction>;
export default _default;
export declare const selectPathStatus: (state: RootState) => StatusPathCombine;
export declare const selectPathErrors: (state: RootState) => ValidationError[] | undefined;

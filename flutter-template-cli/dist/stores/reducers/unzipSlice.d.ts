import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { RootState } from '../index';
import { Progress } from 'progress-stream';
export interface UnzipSliceState extends BaseState, PerformanceState {
    status: Status;
    errors: Array<any> | undefined;
    data: string;
    messages: string;
    progress: Array<Progress>;
}
export declare const setUnzipLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setProgress: import("@reduxjs/toolkit").ActionCreatorWithPayload<Progress, string>, setSuccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setError: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
declare const _default: import("redux").Reducer<UnzipSliceState, import("redux").AnyAction>;
export default _default;
export declare const selectUnzipStatus: (state: RootState) => Status;
export declare const selectUnzipProgress: (state: RootState) => Array<Progress>;
export declare const selectUnzipExecuteTimeSuccess: (state: RootState) => string;
export declare const selectUnzipExecuteTimeError: (state: RootState) => string;

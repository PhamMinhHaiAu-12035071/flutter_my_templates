import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { RootState } from '../index';
export interface UnzipSliceState extends BaseState, PerformanceState {
    status: Status;
    errors: Array<string> | undefined;
    data: string;
    messages: string;
}
export declare const setUnzipLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<UnzipSliceState, import("redux").AnyAction>;
export default _default;
export declare const selectUnzipStatus: (state: RootState) => Status;

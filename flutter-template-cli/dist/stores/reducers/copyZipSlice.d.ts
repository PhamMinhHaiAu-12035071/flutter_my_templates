import { Status } from '../../constants';
import { BaseState, PerformanceState } from '../baseState';
import { RootState } from '../index';
import { RsyncProgressData } from '../../services';
export interface CopyFileState extends BaseState, PerformanceState {
    status: Status;
    errors: Array<string> | undefined;
    data: string;
    progress: Array<RsyncProgressData>;
}
export declare const setCopyZipFlutterLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setCopyZipFlutterSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, setProgress: import("@reduxjs/toolkit").ActionCreatorWithPayload<RsyncProgressData, string>, setCopyZipFlutterError: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
declare const _default: import("redux").Reducer<CopyFileState, import("redux").AnyAction>;
export default _default;
export declare const selectCopyZipFlutterStatus: (state: RootState) => Status;
export declare const selectCopyZipFlutterExecuteTimeSuccess: (state: RootState) => string;
export declare const selectCopyZipFlutterExecuteTimeError: (state: RootState) => string;
export declare const selectProgressCopyZipFlutter: (state: RootState) => Array<RsyncProgressData>;

import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { RootState } from '../index';
export declare enum StatusFolder {
    PATH_FOLDER_EXISTS = "PATH_FOLDER_EXISTS"
}
export declare type StatusFolderCombine = Status | StatusFolder;
export interface CreateFolderState extends BaseState, PerformanceState {
    errors: Array<string> | undefined;
    status: StatusFolderCombine;
}
export declare const setCreateFolderLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setCreateFolderSuccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setCreateFolderExists: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<CreateFolderState, import("redux").AnyAction>;
export default _default;
export declare const selectCreateFolderStatus: (state: RootState) => StatusFolderCombine;
export declare const selectCreateFolderExecuteTimeSuccess: (state: RootState) => string;

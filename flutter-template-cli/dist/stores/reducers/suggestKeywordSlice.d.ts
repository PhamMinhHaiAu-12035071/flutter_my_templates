import { Status, TYPE_FILE } from '../../constants';
import { BaseState, PerformanceState } from '../baseState';
import { RootState } from '../index';
export interface SuggestKeywordData {
    id: string;
    type: TYPE_FILE;
    name: string;
    isActive: boolean;
}
export declare enum SuggestKeywordStatus {
    CHOOSE_TAB = "CHOOSE_TAB"
}
export declare const StatusSuggestKeywordCombine: {
    CHOOSE_TAB: SuggestKeywordStatus.CHOOSE_TAB;
    INITIAL: Status.INITIAL;
    SUCCESS: Status.SUCCESS;
    ERROR: Status.ERROR;
    LOADING: Status.LOADING;
};
export declare type StatusSuggestKeywordCombine = Status | SuggestKeywordStatus;
export interface SuggestKeywordState extends BaseState, PerformanceState {
    status: StatusSuggestKeywordCombine;
    errors: Array<string> | undefined;
    data: Array<SuggestKeywordData>;
    messages: string;
    currentPath: string | undefined;
    indexTab: number;
}
export declare const setSuggestKeywordLoading: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, setSuggestKeywordSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<SuggestKeywordData[], string>, setSuggestKeywordChooseTab: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<SuggestKeywordState, import("redux").AnyAction>;
export default _default;
export declare const selectSuggestKeywordStatus: (state: RootState) => StatusSuggestKeywordCombine;
export declare const selectSuggestKeywordData: (state: RootState) => Array<SuggestKeywordData>;
export declare const selectSuggestKeywordCurrentPath: (state: RootState) => string | undefined;
export declare const selectSuggestKeywordActiveData: (state: RootState) => SuggestKeywordData | undefined;

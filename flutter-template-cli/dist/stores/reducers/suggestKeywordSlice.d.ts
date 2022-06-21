import { Status, TYPE_FILE } from '../../constants';
import { BaseState, PerformanceState } from '../baseState';
import { RootState } from '../index';
export interface SuggestKeywordData {
    type: TYPE_FILE;
    name: string;
}
export interface SuggestKeywordState extends BaseState, PerformanceState {
    status: Status;
    errors: Array<string> | undefined;
    data: Array<SuggestKeywordData>;
    messages: string;
}
export declare const setSuggestKeywordLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setSuggestKeywordSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<SuggestKeywordData[], string>;
declare const _default: import("redux").Reducer<SuggestKeywordState, import("redux").AnyAction>;
export default _default;
export declare const selectSuggestKeywordStatus: (state: RootState) => Status;
export declare const selectSuggestKeywordData: (state: RootState) => Array<SuggestKeywordData>;

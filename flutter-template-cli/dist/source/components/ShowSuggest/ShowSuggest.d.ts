import React from 'react';
import { StatusSuggestKeywordCombine, SuggestKeywordData } from '../../stores/reducers/suggestKeywordSlice';
interface ShowSuggestProps {
    status: StatusSuggestKeywordCombine;
    data: Array<SuggestKeywordData>;
}
export declare const ShowSuggest: (props: ShowSuggestProps) => React.ReactElement;
export {};

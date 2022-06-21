import { Status, TYPE_FILE } from '../../constants';
import { BaseState, PerformanceState } from '../baseState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

const KEY = 'suggestKeywordSlice';

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

const initialState = {
  status: Status.INITIAL,
  errors: undefined,
  datedInitial: Date.now(),
  datedSuccess: undefined,
  datedError: undefined,
  datedLoading: undefined,
  messages: '',
  data: [],
} as SuggestKeywordState;

const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setSuggestKeywordLoading(state) {
      state.status = Status.LOADING;
      state.errors = undefined;
      state.datedLoading = Date.now();
    },
    setSuggestKeywordSuccess(state, action: PayloadAction<Array<SuggestKeywordData>>) {
      state.status = Status.SUCCESS;
      state.errors = undefined;
      state.datedSuccess = Date.now();
      state.data = action.payload.filter(item => item.name !== '');
      state.messages = 'get suggest keyword success';
    },
  },
});

export const { setSuggestKeywordLoading, setSuggestKeywordSuccess } = slice.actions;
export default slice.reducer;

export const selectSuggestKeywordStatus = (state: RootState): Status => {
  return state.suggestKeyword.status;
};

export const selectSuggestKeywordData = (state: RootState): Array<SuggestKeywordData> => {
  return state.suggestKeyword.data;
};

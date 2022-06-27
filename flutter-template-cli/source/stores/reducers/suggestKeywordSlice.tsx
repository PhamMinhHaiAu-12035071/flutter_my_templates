import { Status, TYPE_FILE } from '../../constants';
import { BaseState, PerformanceState } from '../baseState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

const KEY = 'suggestKeywordSlice';

export interface SuggestKeywordData {
  id: string;
  type: TYPE_FILE;
  name: string;
  isActive: boolean;
  absolutePath: string;
  relativePath: string;
}
export enum SuggestKeywordStatus {
  CHOOSE_TAB = 'CHOOSE_TAB',
  EMPTY_DATA = 'EMPTY_DATA',
}

export const StatusSuggestKeywordCombine = { ...Status, ...SuggestKeywordStatus };
export type StatusSuggestKeywordCombine = Status | SuggestKeywordStatus;
export interface SuggestKeywordState extends BaseState, PerformanceState {
  status: StatusSuggestKeywordCombine;
  errors: Array<string> | undefined;
  data: Array<SuggestKeywordData>;
  messages: string;
  currentPath: string | undefined;
  indexTab: number;
}

const initialState = {
  status: StatusSuggestKeywordCombine.INITIAL,
  errors: undefined,
  datedInitial: Date.now(),
  datedSuccess: undefined,
  datedError: undefined,
  datedLoading: undefined,
  messages: '',
  data: [],
  currentPath: undefined,
  indexTab: -1,
} as SuggestKeywordState;

const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setCurrentPath(state, action: PayloadAction<string>) {
      state.currentPath = action.payload;
    },
    setSuggestKeywordLoading(state, action: PayloadAction<string>) {
      state.status = StatusSuggestKeywordCombine.LOADING;
      state.errors = undefined;
      state.datedLoading = Date.now();
      state.currentPath = action.payload;
    },
    setSuggestKeywordSuccess(state, action: PayloadAction<Array<SuggestKeywordData>>) {
      const data = action.payload.filter(item => item.name !== '');
      if (data.length === 0) {
        state.status = StatusSuggestKeywordCombine.EMPTY_DATA;
        state.data = [];
      } else {
        state.status = StatusSuggestKeywordCombine.SUCCESS;
        state.data = action.payload.filter(item => item.name !== '');
      }
      state.errors = undefined;
      state.datedSuccess = Date.now();
      state.messages = 'get suggest keyword success';
    },
    setSuggestKeywordChooseTab(state) {
      state.status = StatusSuggestKeywordCombine.CHOOSE_TAB;
      state.errors = undefined;
      if (state.indexTab === state.data.length - 1) {
        state.indexTab = 0;
      } else {
        state.indexTab = state.indexTab + 1;
      }
      state.data = state.data.map((item, index) =>
        index === state.indexTab
          ? { ...item, ...{ isActive: true } }
          : { ...item, ...{ isActive: false } }
      );
    },
    setInitialData(state) {
      state.status = StatusSuggestKeywordCombine.INITIAL;
      state.errors = undefined;
      state.messages = '';
      state.data = [];
      state.currentPath = undefined;
      state.indexTab = -1;
    },
  },
});

export const {
  setSuggestKeywordLoading,
  setSuggestKeywordSuccess,
  setSuggestKeywordChooseTab,
  setCurrentPath,
  setInitialData,
} = slice.actions;
export default slice.reducer;

export const selectSuggestKeywordStatus = (state: RootState): StatusSuggestKeywordCombine => {
  return state.suggestKeyword.status;
};

export const selectSuggestKeywordData = (state: RootState): Array<SuggestKeywordData> => {
  return state.suggestKeyword.data;
};

export const selectSuggestKeywordCurrentPath = (state: RootState): string | undefined => {
  return state.suggestKeyword.currentPath;
};

export const selectSuggestKeywordActiveData = (
  state: RootState
): SuggestKeywordData | undefined => {
  if (state.suggestKeyword.status === StatusSuggestKeywordCombine.CHOOSE_TAB) {
    return state.suggestKeyword.data[state.suggestKeyword.indexTab];
  }
  return undefined;
};

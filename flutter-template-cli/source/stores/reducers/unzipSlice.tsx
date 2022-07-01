import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Progress } from 'progress-stream';

const KEY = 'unzipSlice';

export interface UnzipSliceState extends BaseState, PerformanceState {
  status: Status;
  errors: Array<string> | undefined;
  data: string;
  messages: string;
  progress: Array<Progress>;
}

const initialState = {
  status: Status.INITIAL,
  errors: undefined,
  datedInitial: Date.now(),
  datedSuccess: undefined,
  datedError: undefined,
  datedLoading: undefined,
  messages: '',
  data: '',
  progress: [],
} as UnzipSliceState;

const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setUnzipLoading(state) {
      state.status = Status.LOADING;
      state.errors = undefined;
      state.datedLoading = Date.now();
    },
    setProgress(state, action: PayloadAction<Progress>) {
      state.errors = undefined;
      state.progress = [...state.progress, action.payload];
    },
  },
});

export const { setUnzipLoading, setProgress } = slice.actions;

export default slice.reducer;

export const selectUnzipStatus = (state: RootState): Status => {
  return state.unzip.status;
};

export const selectUnzipProgress = (state: RootState): Array<Progress> => {
  return state.unzip.progress;
};

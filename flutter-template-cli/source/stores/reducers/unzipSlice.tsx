import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Progress } from 'progress-stream';

const KEY = 'unzipSlice';

export interface UnzipSliceState extends BaseState, PerformanceState {
  status: Status;
  errors: Array<any> | undefined;
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
    setSuccess(state) {
      state.status = Status.SUCCESS;
      state.errors = undefined;
      state.datedSuccess = Date.now();
    },
    setError(state, action: PayloadAction<any>) {
      state.status = Status.ERROR;
      state.errors = [].concat(action.payload);
      state.datedError = Date.now();
    },
  },
});

export const { setUnzipLoading, setProgress, setSuccess, setError } = slice.actions;

export default slice.reducer;

export const selectUnzipStatus = (state: RootState): Status => {
  return state.unzip.status;
};

export const selectUnzipProgress = (state: RootState): Array<Progress> => {
  return state.unzip.progress;
};

export const selectUnzipExecuteTimeSuccess = (state: RootState): string => {
  if (state.unzip.datedSuccess !== undefined && state.unzip.datedLoading !== undefined) {
    const time = (state.unzip.datedSuccess - state.unzip.datedLoading) / 1000;
    return `${time}s`;
  }
  return '';
};

export const selectUnzipExecuteTimeError = (state: RootState): string => {
  if (state.unzip.datedError !== undefined && state.unzip.datedLoading !== undefined) {
    const time = (state.unzip.datedError - state.unzip.datedLoading) / 1000;
    return `${time}s`;
  }
  return '';
};

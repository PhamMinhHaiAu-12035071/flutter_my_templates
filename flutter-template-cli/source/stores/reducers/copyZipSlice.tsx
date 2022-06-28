import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../constants';
import { BaseState, PerformanceState } from '../baseState';
import { RootState } from '../index';
import { RsyncProgressData } from '../../services';

const KEY = 'createZipSlice';

export interface CopyFileState extends BaseState, PerformanceState {
  status: Status;
  errors: Array<string> | undefined;
  data: string;
  messages: string;
  progress: Array<RsyncProgressData>;
}

const initialState = {
  status: Status.INITIAL,
  errors: undefined,
  datedInitial: Date.now(),
  datedSuccess: undefined,
  datedError: undefined,
  datedLoading: undefined,
  progress: [],
  messages: '',
  data: '',
} as CopyFileState;

const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setCopyZipFlutterLoading(state) {
      state.status = Status.LOADING;
      state.errors = undefined;
      state.datedLoading = Date.now();
      state.progress = [];
    },
    setCopyZipFlutterSuccess(state, action: PayloadAction<string>) {
      state.status = Status.SUCCESS;
      state.errors = undefined;
      state.data = action.payload;
      state.datedSuccess = Date.now();
    },
    setCopyZipFlutterError(state, action: PayloadAction<string>) {
      state.status = Status.ERROR;
      state.errors = [action.payload];
      state.data = '';
      state.datedError = Date.now();
    },
    setProgress(state, action: PayloadAction<RsyncProgressData>) {
      state.errors = undefined;
      state.progress = state.progress.concat(action.payload);
    },
  },
});

export const {
  setCopyZipFlutterLoading,
  setCopyZipFlutterSuccess,
  setProgress,
  setCopyZipFlutterError,
} = slice.actions;

export default slice.reducer;

export const selectCopyZipFlutterStatus = (state: RootState): Status => state.copyZipFlutter.status;
export const selectCopyZipFlutterExecuteTimeSuccess = (state: RootState): string => {
  if (
    state.copyZipFlutter.datedSuccess !== undefined &&
    state.copyZipFlutter.datedLoading !== undefined
  ) {
    const time = (state.copyZipFlutter.datedSuccess - state.copyZipFlutter.datedLoading) / 1000;
    return `${time}s`;
  }
  return '';
};
export const selectCopyZipFlutterExecuteTimeError = (state: RootState): string => {
  if (
    state.copyZipFlutter.datedError !== undefined &&
    state.copyZipFlutter.datedLoading !== undefined
  ) {
    const time = (state.copyZipFlutter.datedError - state.copyZipFlutter.datedLoading) / 1000;
    return `${time}s`;
  }
  return '';
};

export const selectProgressCopyZipFlutter = (state: RootState): Array<RsyncProgressData> => {
  return state.copyZipFlutter.progress;
};

export const selectCopyZipFlutterData = (state: RootState): string => {
  return state.copyZipFlutter.data;
};

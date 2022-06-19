import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { ValidationError } from 'fastest-validator';

const KEY = 'path';

export type StatusPathCombine = Status;

export interface PathState extends BaseState, PerformanceState {
  data: string;
  relativePath: string;
  errors: Array<ValidationError> | undefined;
  status: StatusPathCombine;
}

const initialState = {
  data: '',
  relativePath: '',
  status: Status.INITIAL,
  errors: undefined,
  datedInitial: Date.now(),
  datedSuccess: undefined,
  datedError: undefined,
  datedLoading: undefined,
} as PathState;

const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setPathSuccess(state, action: PayloadAction<string>) {
      state.relativePath = action.payload;
      state.data = action.payload;
      state.errors = undefined;
      state.status = Status.SUCCESS;
      state.datedSuccess = Date.now();
    },
    setPathFailed(state, action: PayloadAction<Array<ValidationError>>) {
      state.data = '';
      state.errors = action.payload;
      state.status = Status.ERROR;
    },
    setPathLoading(state) {
      state.data = '';
      state.errors = undefined;
      state.status = Status.LOADING;
      state.datedLoading = Date.now();
    },
    setPath(state, action: PayloadAction<string>) {
      if (state.status === Status.INITIAL || state.status === Status.ERROR) {
        state.data = action.payload;
      }
    },
  },
});

export const { setPathSuccess, setPathFailed, setPathLoading, setPath } = slice.actions;
export default slice.reducer;

export const selectPathStatus = (state: RootState): StatusPathCombine => state.path.status;
export const selectPathErrors = (state: RootState): Array<ValidationError> | undefined =>
  state.path.errors;
export const selectPathExecuteTimeSuccess = (state: RootState): string => {
  if (state.path.datedSuccess !== undefined && state.path.datedLoading !== undefined) {
    const time = (state.path.datedSuccess - state.path.datedLoading) / 1000;
    return `${time}s`;
  }
  return '';
};

export const selectRelativePath = (state: RootState): string => {
  return state.path.relativePath;
};
export const selectPathData = (state: RootState): string => state.path.data;

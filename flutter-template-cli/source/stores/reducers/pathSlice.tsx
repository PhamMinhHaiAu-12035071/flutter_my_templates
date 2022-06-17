import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { BaseState } from '../baseState';
import { Status } from '../../constants';
import { ValidationError } from 'fastest-validator';

const KEY = 'path';

enum StatusPath {
  KEY_PRESS = 'KEY_PRESS',
}
export type StatusPathCombine = Status | StatusPath;
export interface PathState extends BaseState {
  data: string;
  errors: Array<ValidationError> | undefined;
  status: StatusPathCombine;
}

const initialState = { data: '', status: Status.INITIAL, errors: undefined } as PathState;

const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setPathSuccess(state, action: PayloadAction<string>) {
      state.data = action.payload;
      state.errors = undefined;
      state.status = Status.SUCCESS;
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
    },
    setEmptyError(state) {
      state.data = '';
      state.errors = undefined;
      state.status = StatusPath.KEY_PRESS;
    },
  },
});

export const { setPathSuccess, setPathFailed, setPathLoading, setEmptyError } = slice.actions;
export default slice.reducer;

export const selectPathStatus = (state: RootState) => state.path.status;
export const selectPathErrors = (state: RootState) => state.path.errors;

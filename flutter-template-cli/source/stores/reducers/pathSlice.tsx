import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { ValidationError } from 'fastest-validator';

const KEY = 'path';

export enum PathStatusError {
  ERROR_KEYDOWN = 'ERROR_KEYDOWN',
  KEY_DOWN = 'KEY_DOWN',
  AUTOCOMPLETE = 'AUTOCOMPLETE',
}
export const StatusPathCombine = { ...Status, ...PathStatusError };
export type StatusPathCombine = Status | PathStatusError;

export interface PathState extends BaseState, PerformanceState {
  data: string;
  relativePath: string;
  errors: Array<ValidationError> | undefined;
  status: StatusPathCombine;
}

const initialState = {
  data: '',
  relativePath: '',
  status: StatusPathCombine.INITIAL,
  errors: undefined,
  datedInitial: Date.now(),
  datedSuccess: undefined,
  datedError: undefined,
  datedLoading: undefined,
  messages: '',
} as unknown as PathState;

const LIST_CHARACTER_DENIED = [':', '`'];

const _validateStringValid = (str: string): boolean => {
  const size = str.length;
  for (let i = 0; i < size; i++) {
    if (LIST_CHARACTER_DENIED.some(item => item === str.charAt(i))) {
      return false;
    }
  }
  return true;
};
const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setPathSuccess(state, action: PayloadAction<string>) {
      state.relativePath = action.payload;
      state.data = action.payload;
      state.errors = undefined;
      state.status = StatusPathCombine.SUCCESS;
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
      state.status = StatusPathCombine.LOADING;
      state.datedLoading = Date.now();
    },
    setPath(state, action: PayloadAction<string>) {
      const checkedValid = _validateStringValid(action.payload);
      if (!checkedValid) {
        const error: ValidationError = {
          type: 'notValid',
          field: 'path',
          message: "Character valid is not include '`' or ':'",
        };
        state.errors = [error];
        state.status = StatusPathCombine.ERROR_KEYDOWN;
        state.data = action.payload;
      }
      if (
        state.status === StatusPathCombine.INITIAL ||
        state.status === StatusPathCombine.ERROR ||
        checkedValid
      ) {
        state.errors = undefined;
        state.data = action.payload;
        state.status = StatusPathCombine.KEY_DOWN;
      }
    },
    setPathAutocomplete(state, action: PayloadAction<string>) {
      state.errors = undefined;
      state.data = action.payload;
      state.status = StatusPathCombine.AUTOCOMPLETE;
    },
    setStatusKeyDown(state) {
      state.status = StatusPathCombine.KEY_DOWN;
    },
  },
});

export const {
  setPathSuccess,
  setPathFailed,
  setPathLoading,
  setPath,
  setPathAutocomplete,
  setStatusKeyDown,
} = slice.actions;
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

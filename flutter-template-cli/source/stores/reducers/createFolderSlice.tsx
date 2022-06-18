import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

const KEY = 'createFolderBin';

export enum StatusFolder {
  PATH_FOLDER_EXISTS = 'PATH_FOLDER_EXISTS',
}

export type StatusFolderCombine = Status | StatusFolder;

export interface CreateFolderState extends BaseState, PerformanceState {
  errors: Array<string> | undefined;
  status: StatusFolderCombine;
}

const initialState = {
  status: Status.INITIAL,
  errors: undefined,
  datedLoading: undefined,
  datedSuccess: undefined,
  datedInitial: Date.now(),
  datedError: undefined,
} as CreateFolderState;

const slice = createSlice({
  name: KEY,
  initialState: initialState,
  reducers: {
    setCreateFolderLoading(state) {
      state.status = Status.LOADING;
      state.errors = undefined;
      state.datedLoading = Date.now();
    },
    setCreateFolderSuccess(state) {
      state.status = Status.SUCCESS;
      state.errors = undefined;
      state.datedSuccess = Date.now();
    },
    setCreateFolderExists(state) {
      state.status = StatusFolder.PATH_FOLDER_EXISTS;
      state.errors = undefined;
      state.datedSuccess = Date.now();
    },
  },
});

export const { setCreateFolderLoading, setCreateFolderSuccess, setCreateFolderExists } =
  slice.actions;

export default slice.reducer;

export const selectCreateFolderStatus = (state: RootState): StatusFolderCombine =>
  state.createFolder.status;
export const selectCreateFolderExecuteTimeSuccess = (state: RootState): string => {
  if (state.createFolder.datedSuccess !== undefined && state.createFolder.datedLoading) {
    const time = (state.createFolder?.datedSuccess - state.createFolder?.datedLoading) / 1000;
    return `${time}s`;
  }
  return '';
};

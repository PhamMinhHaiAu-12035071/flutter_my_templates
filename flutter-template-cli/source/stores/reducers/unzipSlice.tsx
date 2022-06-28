import { BaseState, PerformanceState } from '../baseState';
import { Status } from '../../constants';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

const KEY = 'unzipSlice';

export interface UnzipSliceState extends BaseState, PerformanceState {
  status: Status;
  errors: Array<string> | undefined;
  data: string;
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
  data: '',
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
  },
});

export const { setUnzipLoading } = slice.actions;

export default slice.reducer;

export const selectUnzipStatus = (state: RootState): Status => {
  return state.unzip.status;
};

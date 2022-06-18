import { Status } from '../constants';

export interface BaseState {
  data: unknown;
  status: Status | unknown;
  messages: unknown;
  errors: Array<unknown> | unknown;
}

export interface PerformanceState {
  datedLoading: number | undefined;
  datedSuccess: number | undefined;
  datedInitial: number;
  datedError: number | undefined;
}

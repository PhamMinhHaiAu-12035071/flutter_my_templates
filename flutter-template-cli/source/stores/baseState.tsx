import { Status } from '../constants';

export interface BaseState {
  data: unknown;
  status: Status | unknown;
  messages: unknown;
  errors: Array<unknown> | unknown;
}

import { Progress } from 'progress-stream';

export enum Status {
  INITIAL = 'INITIAL',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  PROGRESS = 'PROGRESS',
}
export interface UnzipFileState {
  status: Status;
  message?: string;
  error?: never | undefined;
  progress?: Progress | undefined;
}
export * from './progress_unzip.service';

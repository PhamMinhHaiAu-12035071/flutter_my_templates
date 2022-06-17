import path from 'path';

export const SCRIPT_CHECK_FILE_EXISTS = path.join(__dirname, '../../scripts/check_file_exists.sh');
export const PATH_ZIP_EXTENSION = '.zip';
export * from './colors';
export * from './spinners';

export enum Status {
  INITIAL = 'INITIAL',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING',
}

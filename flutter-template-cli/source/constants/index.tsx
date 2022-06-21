import path from 'path';
import sanitizedConfig from './configs';

export const SCRIPT_CHECK_FILE_EXISTS = path.join(__dirname, '../../scripts/check_file_exists.sh');
export const SCRIPT_SHOW_ABSOLUTE_PATH = path.join(
  __dirname,
  '../../scripts/show_absolute_path.sh'
);
export const SCRIPT_SHOW_FOLDER_AND_FILE_ZIP = path.join(
  __dirname,
  '../../scripts/show_folder_and_file_zip.sh'
);
export const PATH_ZIP_EXTENSION = '.zip';
export * from './colors';
export * from './spinners';
export * from './status';
export const SPACE_CHARACTER = ' ';

export const ZERO_DELAY = 0;
export const DELAY_QUIT_APP = 150;
export const ABSOLUTE_PATH_FOLDER_BIN = path.join(__dirname, sanitizedConfig.PATH_FOLDER_BIN);
export const ABSOLUTE_PATH_FOLDER_FLUTTER_TEMPLATE = path.join(
  __dirname,
  sanitizedConfig.PATH_FOLDER_FLUTTER_TEMPLATE
);

export enum TYPE_FILE {
  FILE = 'FILE',
  FOLDER = 'FOLDER',
}

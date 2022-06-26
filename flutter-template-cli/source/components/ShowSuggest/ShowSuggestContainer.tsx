import React from 'react';
import { useInput } from 'ink';
import {
  DELAY_SUGGEST_KEYWORD,
  SCRIPT_SHOW_ABSOLUTE_PATH,
  SCRIPT_SHOW_FOLDER_AND_FILE_ZIP,
  TYPE_FILE,
} from '../../constants';
import { execSync } from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import {
  selectSuggestKeywordCurrentPath,
  selectSuggestKeywordData,
  selectSuggestKeywordStatus,
  setSuggestKeywordChooseTab,
  setSuggestKeywordLoading,
  setSuggestKeywordSuccess,
  StatusSuggestKeywordCombine,
  SuggestKeywordData,
} from '../../stores/reducers/suggestKeywordSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ShowSuggest } from './ShowSuggest';
import { StatusPathCombine } from '../../stores/reducers/pathSlice';

const childProcess = require('child_process');

interface ShowSuggestContainerProps {
  path: string;
  status: StatusPathCombine;
}
export const ShowSuggestContainer = (props: ShowSuggestContainerProps): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useAppSelector<StatusSuggestKeywordCombine>(selectSuggestKeywordStatus);
  const data = useAppSelector<Array<SuggestKeywordData>>(selectSuggestKeywordData);
  const currentPath = useAppSelector<string | undefined>(selectSuggestKeywordCurrentPath);
  useInput((_input, key) => {
    if (
      key.tab &&
      props.path.length >= 1 &&
      props.status !== StatusPathCombine.ERROR &&
      props.status !== StatusPathCombine.ERROR_KEYDOWN
    ) {
      if (props.path !== currentPath) {
        _showSuggest();
      } else {
        const action = setSuggestKeywordChooseTab();
        dispatch(action);
      }
    }
  });

  const _showSuggest = (): void => {
    const action = setSuggestKeywordLoading(props.path);
    setTimeout(() => {
      dispatch(action);
    }, 0);
    const arrPath = _.chain(props.path).padEnd(2, '/').split('/').value();
    const size = arrPath.length;
    const name = arrPath[size - 1];
    const relativePath = `${arrPath.slice(0, -1).join('/')}/`;
    const absolutePath = execSync(`${SCRIPT_SHOW_ABSOLUTE_PATH} ${relativePath}`).toString();
    const regexAbsolutePath = new RegExp('(:?\\/.|\\/)$', 'gm');
    const formatAbsolutePath = absolutePath.replace(regexAbsolutePath, '');
    const generateUid = uuidv4();
    const subProcess = childProcess.exec(
      `${SCRIPT_SHOW_FOLDER_AND_FILE_ZIP} NAME="${name}" ABSOLUTE_PATH="${formatAbsolutePath}" UUID=${generateUid}`
    );
    subProcess.stdout.on('data', (data: unknown) => _onData(data, generateUid));
  };
  const _onData = (data: unknown, id: string): void => {
    if (typeof data === 'string') {
      const [directories, files] = data.split(id);
      let arrNameFolder: (string | undefined)[] = [];
      let arrNameFiles: (string | undefined)[] = [];
      if (directories) {
        arrNameFolder = _.compact(
          directories.split('\n').map((item: string) => {
            const arr = item.split('/');
            return arr[arr.length - 1];
          })
        );
      }
      if (files) {
        arrNameFiles = _.compact(
          files.split('\n').map((item: string) => {
            const arr = item.split('/');
            return arr[arr.length - 1];
          })
        );
      }
      let arrMappingFolders: Array<SuggestKeywordData> = [];
      let arrMappingFiles: Array<SuggestKeywordData> = [];
      if (arrNameFolder.length > 0) {
        arrMappingFolders = arrNameFolder.map(item => ({
          id: uuidv4(),
          type: TYPE_FILE.FOLDER,
          name: item ?? '',
          isActive: false,
        }));
      }
      if (arrNameFiles.length > 0) {
        arrMappingFiles = arrNameFiles.map(item => ({
          id: uuidv4(),
          type: TYPE_FILE.FILE,
          name: item ?? '',
          isActive: false,
        }));
      }
      const action = setSuggestKeywordSuccess([...arrMappingFolders, ...arrMappingFiles]);
      setTimeout(() => {
        dispatch(action);
      }, DELAY_SUGGEST_KEYWORD);
    }
  };

  return (
    <>
      <ShowSuggest status={status} data={data} />
    </>
  );
};

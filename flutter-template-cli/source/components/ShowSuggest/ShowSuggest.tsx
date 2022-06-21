import React from 'react';
import { Box, Text, useInput } from 'ink';
import { Styles } from 'ink/build/styles';
import {
  Colors,
  SCRIPT_SHOW_ABSOLUTE_PATH,
  SCRIPT_SHOW_FOLDER_AND_FILE_ZIP,
  Status,
  TYPE_FILE,
} from '../../constants';
import { execSync } from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import {
  selectSuggestKeywordStatus,
  setSuggestKeywordLoading,
  setSuggestKeywordSuccess,
  SuggestKeywordData,
} from '../../stores/reducers/suggestKeywordSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores';
import { useAppSelector } from '../../hooks/useAppSelector';
import { BoxRow } from '../BoxRow/BoxRow';
import { ShowSuggestLoading } from './ShowSuggestLoading';
import { ShowSuggestSuccess } from './ShowSuggestSuccess';
import { Props } from 'ink/build/components/Text';

const childProcess = require('child_process');

const styledWrapperTitleSuggest: Styles = {
  paddingLeft: 2,
};
const styledTitleSuggest: Props = {
  color: Colors.SYSTEM_GRAY_2,
};
interface ShowSuggestProps {
  path: string;
}
export const ShowSuggest = (props: ShowSuggestProps): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useAppSelector<Status>(selectSuggestKeywordStatus);
  useInput((_input, key) => {
    if (key.tab) {
      const action = setSuggestKeywordLoading();
      dispatch(action);
      const arrPath = props.path.split('/');
      const size = arrPath.length;
      if (size >= 2) {
        const name = arrPath[size - 1];
        const relativePath = `${arrPath.slice(0, -1).join('/')}/`;
        const absolutePath = execSync(`${SCRIPT_SHOW_ABSOLUTE_PATH} ${relativePath}`).toString();
        const generateUid = uuidv4();
        const subProcess = childProcess.exec(
          `${SCRIPT_SHOW_FOLDER_AND_FILE_ZIP} NAME="${name}" ABSOLUTE_PATH="${absolutePath}" UUID=${generateUid}`
        );
        subProcess.stdout.on('data', (data: unknown) => {
          if (typeof data === 'string') {
            const [directories, files] = data.split(generateUid);
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
                type: TYPE_FILE.FOLDER,
                name: item ?? '',
              }));
            }
            if (arrNameFiles.length > 0) {
              arrMappingFiles = arrNameFiles.map(item => ({
                type: TYPE_FILE.FILE,
                name: item ?? '',
              }));
            }
            const action = setSuggestKeywordSuccess([...arrMappingFolders, ...arrMappingFiles]);
            dispatch(action);
          }
        });
      }
    }
  });

  return (
    <>
      <Box {...styledWrapperTitleSuggest}>
        <Text {...styledTitleSuggest}>Press 'Tab' to show suggest folder or file</Text>
      </Box>
      {status === Status.LOADING && (
        <BoxRow>
          <ShowSuggestLoading />
        </BoxRow>
      )}
      {status === Status.SUCCESS && (
        <BoxRow>
          <ShowSuggestSuccess />
        </BoxRow>
      )}
    </>
  );
};

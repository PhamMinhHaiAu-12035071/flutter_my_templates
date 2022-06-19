import React from 'react';
import { Box, Text, useInput } from 'ink';
import { Styles } from 'ink/build/styles';
import {
  Colors,
  SCRIPT_SHOW_ABSOLUTE_PATH,
  SCRIPT_SHOW_FOLDER_AND_FILE_ZIP,
} from '../../constants';
import { execSync } from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

const childProcess = require('child_process');
// const shell = require('shelljs');
const styledWrapperTitleSuggest: Styles = {
  paddingLeft: 2,
};
const styledTitleSuggest = {
  color: Colors.SYSTEM_GRAY_2,
};
interface ShowSuggestProps {
  path: string;
}
export const ShowSuggest = (props: ShowSuggestProps) => {
  useInput((_input, key) => {
    if (key.tab) {
      const arrPath = props.path.split('/');
      const size = arrPath.length;
      if (size >= 2) {
        const name = arrPath[size - 1];
        const relativePath = `${arrPath.slice(0, -1).join('/')}/`;
        const absolutePath = execSync(`${SCRIPT_SHOW_ABSOLUTE_PATH} ${relativePath}`).toString();
        console.log(`[useInput] you press tab ${arrPath} ${absolutePath}`);
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
            console.log(
              `show suggest directory: ${JSON.stringify(arrNameFolder)} file: ${JSON.stringify(
                arrNameFiles
              )}`
            );
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
    </>
  );
};

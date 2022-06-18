import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCreateFolderExecuteTimeSuccess } from '../../stores/reducers/createFolderSlice';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { Colors, SPACE_CHARACTER, warningSpinner } from '../../constants';
import { Text } from 'ink';
import _ from 'lodash';
import React from 'react';

export const CreateFolderExists = () => {
  const time = useAppSelector<string>(selectCreateFolderExecuteTimeSuccess);
  return (
    <CustomSpinner
      spinner={warningSpinner}
      colorSpinner={Colors.SYSTEM_YELLOW}
      arrText={[
        <Text color={Colors.SYSTEM_YELLOW}>
          {_.repeat(SPACE_CHARACTER, 2) + 'Folder was exists!' + _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text color={Colors.SYSTEM_GRAY}>({time})</Text>,
      ]}
    />
  );
};

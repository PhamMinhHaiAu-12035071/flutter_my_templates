import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { checkedSpinner, Colors, SPACE_CHARACTER } from '../../constants';
import { Text } from 'ink';
import _ from 'lodash';
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCreateFolderExecuteTimeSuccess } from '../../stores/reducers/createFolderSlice';

export const CreateFolderSuccess = () => {
  const time = useAppSelector<string>(selectCreateFolderExecuteTimeSuccess);
  return (
    <CustomSpinner
      spinner={checkedSpinner}
      colorSpinner={Colors.SYSTEM_GREEN}
      arrText={[
        <Text color={Colors.SYSTEM_GREEN}>
          {SPACE_CHARACTER + 'Create folder executed success!' + _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text color={Colors.SYSTEM_GRAY}>({time})</Text>,
      ]}
    />
  );
};

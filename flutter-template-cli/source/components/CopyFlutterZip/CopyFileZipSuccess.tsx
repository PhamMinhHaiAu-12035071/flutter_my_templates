import { useAppSelector } from '../../hooks/useAppSelector';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { checkedSpinner, Colors, SPACE_CHARACTER } from '../../constants';
import { Text } from 'ink';
import _ from 'lodash';
import React from 'react';
import { selectCopyZipFlutterExecuteTimeSuccess } from '../../stores/reducers/copyZipSlice';

export const CopyFileZipSuccess = () => {
  const time = useAppSelector<string>(selectCopyZipFlutterExecuteTimeSuccess);
  return (
    <CustomSpinner
      spinner={checkedSpinner}
      colorSpinner={Colors.SYSTEM_GREEN}
      arrText={[
        <Text color={Colors.SYSTEM_GREEN}>
          {SPACE_CHARACTER + 'Copy file flutter zip success!' + _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text color={Colors.SYSTEM_GRAY}>({time})</Text>,
      ]}
    />
  );
};

import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { Colors, DELAY_QUIT_APP, errorSpinner, SPACE_CHARACTER } from '../../constants';
import { Text, useApp } from 'ink';
import _ from 'lodash';
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCopyZipFlutterExecuteTimeError } from '../../stores/reducers/copyZipSlice';

export const CopyFileZipError = () => {
  const time = useAppSelector<string>(selectCopyZipFlutterExecuteTimeError);
  const { exit } = useApp();
  // Exit the app after 5 seconds
  React.useEffect(() => {
    setTimeout(() => {
      exit();
    }, DELAY_QUIT_APP);
  }, []);
  return (
    <CustomSpinner
      spinner={errorSpinner}
      colorSpinner={Colors.SYSTEM_RED}
      arrText={[
        <Text color={Colors.SYSTEM_RED}>
          {_.repeat(SPACE_CHARACTER, 1) +
            'Error copy file flutter zip!' +
            _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text color={Colors.SYSTEM_GRAY}>({time})</Text>,
      ]}
    />
  );
};

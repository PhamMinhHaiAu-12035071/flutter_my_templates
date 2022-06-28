import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { Colors, DELAY_QUIT_APP, errorSpinner, SPACE_CHARACTER } from '../../constants';
import { Text, useApp } from 'ink';
import _ from 'lodash';
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCopyZipFlutterExecuteTimeError } from '../../stores/reducers/copyZipSlice';
import { Props } from 'ink/build/components/Text';

const styledText: Props = {
  color: Colors.SYSTEM_RED,
};
const styledTime: Props = {
  color: Colors.SYSTEM_GRAY,
};
export const CopyFileZipError = (): React.ReactElement => {
  const time = useAppSelector<string>(selectCopyZipFlutterExecuteTimeError);
  const { exit } = useApp();
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
        <Text {...styledText}>
          {_.repeat(SPACE_CHARACTER, 1) +
            'Error copy file flutter zip!' +
            _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text {...styledTime}>({time})</Text>,
      ]}
    />
  );
};

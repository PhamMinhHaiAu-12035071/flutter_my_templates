import { useAppSelector } from '../../hooks/useAppSelector';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { checkedSpinner, Colors, SPACE_CHARACTER } from '../../constants';
import { Text } from 'ink';
import _ from 'lodash';
import React from 'react';
import { selectCopyZipFlutterExecuteTimeSuccess } from '../../stores/reducers/copyZipSlice';
import { Props } from 'ink/build/components/Text';

const styledText: Props = {
  color: Colors.SYSTEM_GREEN,
};
const styledTime: Props = {
  color: Colors.SYSTEM_GRAY,
};

export const CopyFileZipSuccess = (): React.ReactElement => {
  const time = useAppSelector<string>(selectCopyZipFlutterExecuteTimeSuccess);
  return (
    <CustomSpinner
      spinner={checkedSpinner}
      colorSpinner={Colors.SYSTEM_GREEN}
      arrText={[
        <Text {...styledText}>
          {SPACE_CHARACTER + 'Copy file flutter zip success!' + _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text {...styledTime}>({time})</Text>,
      ]}
    />
  );
};

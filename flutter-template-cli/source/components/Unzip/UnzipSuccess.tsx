import { useAppSelector } from '../../hooks/useAppSelector';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { checkedSpinner, Colors, SPACE_CHARACTER } from '../../constants';
import { Text } from 'ink';
import _ from 'lodash';
import React from 'react';
import { Props } from 'ink/build/components/Text';
import { selectUnzipExecuteTimeSuccess } from '../../stores/reducers/unzipSlice';

const styledText: Props = {
  color: Colors.SYSTEM_GREEN,
};
const styledTime: Props = {
  color: Colors.SYSTEM_GRAY,
};

export const UnzipSuccess = (): React.ReactElement => {
  const time = useAppSelector<string>(selectUnzipExecuteTimeSuccess);
  return (
    <CustomSpinner
      spinner={checkedSpinner}
      colorSpinner={Colors.SYSTEM_GREEN}
      arrText={[
        <Text {...styledText}>
          {SPACE_CHARACTER + 'Unzip file flutter success!' + _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text {...styledTime}>({time})</Text>,
      ]}
    />
  );
};

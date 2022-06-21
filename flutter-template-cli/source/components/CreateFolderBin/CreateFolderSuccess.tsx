import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { checkedSpinner, Colors, SPACE_CHARACTER } from '../../constants';
import { Text } from 'ink';
import _ from 'lodash';
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCreateFolderExecuteTimeSuccess } from '../../stores/reducers/createFolderSlice';
import { Props } from 'ink/build/components/Text';

const styledText: Props = {
  color: Colors.SYSTEM_GREEN,
};
const styledTime: Props = {
  color: Colors.SYSTEM_GRAY,
};
export const CreateFolderSuccess = (): React.ReactElement => {
  const time = useAppSelector<string>(selectCreateFolderExecuteTimeSuccess);
  return (
    <CustomSpinner
      spinner={checkedSpinner}
      colorSpinner={Colors.SYSTEM_GREEN}
      arrText={[
        <Text {...styledText}>
          {SPACE_CHARACTER + 'Create folder executed success!' + _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text {...styledTime}>({time})</Text>,
      ]}
    />
  );
};

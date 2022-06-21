import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCreateFolderExecuteTimeSuccess } from '../../stores/reducers/createFolderSlice';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { Colors, SPACE_CHARACTER, warningSpinner } from '../../constants';
import { Text } from 'ink';
import _ from 'lodash';
import React from 'react';
import { Props } from 'ink/build/components/Text';

const styledText: Props = {
  color: Colors.SYSTEM_YELLOW,
};

const styledTime: Props = {
  color: Colors.SYSTEM_GRAY,
};

export const CreateFolderExists = (): React.ReactElement => {
  const time = useAppSelector<string>(selectCreateFolderExecuteTimeSuccess);
  return (
    <CustomSpinner
      spinner={warningSpinner}
      colorSpinner={Colors.SYSTEM_YELLOW}
      arrText={[
        <Text {...styledText}>
          {_.repeat(SPACE_CHARACTER, 2) + 'Folder was exists!' + _.repeat(SPACE_CHARACTER, 2)}
        </Text>,
        <Text {...styledTime}>({time})</Text>,
      ]}
    />
  );
};

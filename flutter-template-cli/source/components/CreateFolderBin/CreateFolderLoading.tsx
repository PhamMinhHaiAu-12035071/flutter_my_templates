import { Text } from 'ink';
import { Colors, SPACE_CHARACTER } from '../../constants';
import Spinner from 'ink-spinner';
import _ from 'lodash';
import React from 'react';

export const CreateFolderLoading = () => {
  return (
    <Text>
      <Text color={Colors.SYSTEM_YELLOW}>
        <Spinner type="dots" />
      </Text>
      <Text color={Colors.SYSTEM_YELLOW}>{_.repeat(SPACE_CHARACTER, 2) + 'Create folder bin'}</Text>
    </Text>
  );
};

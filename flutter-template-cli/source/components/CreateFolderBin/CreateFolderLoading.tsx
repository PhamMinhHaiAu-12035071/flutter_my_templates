import { Text } from 'ink';
import { Colors, SPACE_CHARACTER } from '../../constants';
import Spinner from 'ink-spinner';
import _ from 'lodash';
import React from 'react';
import { Props } from 'ink/build/components/Text';

const styledText: Props = {
  color: Colors.SYSTEM_YELLOW,
};
export const CreateFolderLoading = (): React.ReactElement => {
  return (
    <Text>
      <Text {...styledText}>
        <Spinner type="dots" />
      </Text>
      <Text {...styledText}>{_.repeat(SPACE_CHARACTER, 2) + 'Create folder bin'}</Text>
    </Text>
  );
};

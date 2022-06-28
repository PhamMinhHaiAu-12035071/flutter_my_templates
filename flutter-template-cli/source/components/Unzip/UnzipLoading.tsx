import { Props } from 'ink/build/components/Text';
import { Colors, SPACE_CHARACTER } from '../../constants';
import { Text } from 'ink';
import Spinner from 'ink-spinner';
import _ from 'lodash';
import React from 'react';

const styledText: Props = {
  color: Colors.SYSTEM_YELLOW,
};

export const UnzipLoading = (): React.ReactElement => {
  return (
    <Text>
      <Text {...styledText}>
        <Spinner type="dots" />
      </Text>
      <Text {...styledText}>{_.repeat(SPACE_CHARACTER, 2) + 'Unzip file flutter'}</Text>
    </Text>
  );
};

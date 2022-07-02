// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Newline, Text } from 'ink';
import React from 'react';
import { Props } from 'ink/build/components/Text';
import Link from 'ink-link';
import { Colors, SPACE_CHARACTER } from '../../constants';
import _ from 'lodash';

const styledText: Props = {
  color: 'white',
};
const styledTextLink: Props = {
  color: Colors.SYSTEM_BLUE,
};
export const LinkDownloadSDKFlutter = (): React.ReactElement => {
  return (
    <>
      <Text {...styledText}>You have not yet downloaded Flutter SDK?</Text>
      <Newline />
      <Text {...styledText}>
        {'Please download flutter SDK in here:' + _.repeat(SPACE_CHARACTER, 2)}
        <Link url="https://docs.flutter.dev/get-started/install/macos">
          <Text {...styledTextLink}>https://docs.flutter.dev/get-started/install/macos</Text>
        </Link>
      </Text>
      <Newline />
    </>
  );
};

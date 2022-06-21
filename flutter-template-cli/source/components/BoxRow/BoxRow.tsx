import { Box } from 'ink';
import React from 'react';
import { Styles } from 'ink/build/styles';

const styledContainer: Styles = {
  marginTop: 1,
};
interface BoxRowProps {
  children: React.ReactElement;
}
export const BoxRow = (props: BoxRowProps): React.ReactElement => {
  return <Box {...styledContainer}>{props.children}</Box>;
};

import { Box } from 'ink';
import React from 'react';
import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Box';

const styledContainer: Styles = {
  marginTop: 1,
};
interface BoxRowProps extends Props {
  children: React.ReactElement;
}
export const BoxRow = (props: BoxRowProps): React.ReactElement => {
  const { children, ...rest } = props;
  const styled = { ...styledContainer, ...rest };
  return <Box {...styled}>{children}</Box>;
};

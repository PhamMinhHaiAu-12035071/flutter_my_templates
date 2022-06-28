import React from 'react';
import { Box, Text } from 'ink';
import { Styles } from 'ink/build/styles';

const styledContainer: Styles = {
  marginLeft: 2,
};
export const ShowSuggestEmpty = () => {
  return (
    <Box {...styledContainer}>
      <Text>Not found data</Text>
    </Box>
  );
};

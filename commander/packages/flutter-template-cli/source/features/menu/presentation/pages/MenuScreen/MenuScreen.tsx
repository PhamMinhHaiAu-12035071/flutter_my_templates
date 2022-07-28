import React from 'react';
import { Box } from 'ink';
import { styles } from './styles';
import { ListItemMenu } from '../../components/ListItemMenu/ListItemMenu';

const MenuScreen = (): React.ReactElement => {
  return (
    <Box {...styles.container}>
      <ListItemMenu />
    </Box>
  );
};

export { MenuScreen };

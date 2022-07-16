import React from 'react';
import { Box } from 'ink';
import { styles } from './styles';
import { ListItemMenu } from './components/ListItemMenu/ListItemMenu';
import { menus } from '../../constants/menu';

const MenuScreen = (): React.ReactElement => {
  return (
    <Box {...styles.container}>
      <ListItemMenu arr={menus} />
    </Box>
  );
};

export { MenuScreen };

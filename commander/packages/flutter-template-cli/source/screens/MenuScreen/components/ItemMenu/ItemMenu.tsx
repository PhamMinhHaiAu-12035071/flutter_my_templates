import { Box, Text } from 'ink';
import { Styles } from 'ink/build/styles';
import React from 'react';
import { styles } from './styles';
import _ from 'lodash';
import { PATH } from '../../../../router/RouterContext';
import { useTranslation } from 'react-i18next';

interface ItemMenuProps {
  id: string;
  name: string;
  screen: PATH;
  style?: Styles;
}
const ItemMenu = ({ id, name, style }: ItemMenuProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Box {..._.merge(styles.container, style)}>
      <Box {...styles.wrapperId}>
        <Text>[{id}]</Text>
      </Box>
      <Box {...styles.wrapperText}>
        <Text>{t(`${name}`)}</Text>
      </Box>
    </Box>
  );
};

export { ItemMenu };

export type { ItemMenuProps };

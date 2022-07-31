import { Box, Text } from 'ink';
import { Styles } from 'ink/build/styles';
import React from 'react';
import { styles } from './styles';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { MenuItemModel } from '../../../infrastructure/models/MenuItemModel';
import { TextKaraokeAnimation } from '@commander/ui-kit';

interface ItemMenuProps {
  readonly item: MenuItemModel;
  readonly style?: Styles;
}

const ItemMenu = ({ item, style }: ItemMenuProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Box {..._.merge(styles.container, style)}>
      <Box {...styles.wrapperId}>
        <Text>[{item.id}]</Text>
      </Box>
      <Box {...styles.wrapperText}>
        {!item.isSelected && <Text></Text>}
        <TextKaraokeAnimation
          text={t(`${item.name}`)}
          isRunning={item.isSelected ?? false}
          styleOrigin={styles.textDefaultColor}
          styleAnimation={styles.textActiveColor}
        />
      </Box>
    </Box>
  );
};

export { ItemMenu };

export type { ItemMenuProps };

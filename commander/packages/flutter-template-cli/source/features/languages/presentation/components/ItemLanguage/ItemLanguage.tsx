import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import {
  CustomSpinner,
  fingerPointingRight,
  TextKaraokeAnimation,
} from '@commander/ui-kit';
import { LanguageModel } from '../../../infrastructure/models/LanguageModel';

interface ItemLanguageProps {
  item: LanguageModel;
}

const ItemLanguage: React.FC<ItemLanguageProps> = ({
  item,
}: ItemLanguageProps): React.ReactElement => {
  return (
    <Box {...styles.container}>
      <Box {...styles.wrapperPointer}>
        {item.isSelected && (
          <CustomSpinner
            spinner={fingerPointingRight}
            colorSpinner={'yellow'}
          />
        )}
      </Box>
      <Box {...styles.wrapperDivider} />
      <Box {...styles.wrapperContent}>
        {!item.isSelected && <Text> </Text>}
        <TextKaraokeAnimation
          text={item.name}
          isRunning={item.isSelected ?? false}
          styleOrigin={styles.textDefaultColor}
          styleAnimation={styles.textActiveColor}
        />
      </Box>
    </Box>
  );
};

export { ItemLanguage };
export type { ItemLanguageProps };

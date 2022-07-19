import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import {
  CustomSpinner,
  fingerPointingRight,
  TextKaraokeAnimation,
} from '@commander/ui-kit';
import { Language } from '../../../../constants/language';

interface ItemLanguageProps extends Language {
  readonly isSelected?: boolean;
}

const ItemLanguage = ({
  name,
  isSelected,
}: ItemLanguageProps): React.ReactElement => {
  return (
    <Box {...styles.container}>
      <Box {...styles.wrapperPointer}>
        {isSelected && (
          <CustomSpinner
            spinner={fingerPointingRight}
            colorSpinner={'yellow'}
          />
        )}
      </Box>
      <Box {...styles.wrapperDivider} />
      <Box {...styles.wrapperContent}>
        {!isSelected && <Text> </Text>}
        <TextKaraokeAnimation
          text={name}
          isRunning={isSelected ?? false}
          styleOrigin={styles.textDefaultColor}
          styleAnimation={styles.textActiveColor}
        />
      </Box>
    </Box>
  );
};

export { ItemLanguage };
export type { ItemLanguageProps };

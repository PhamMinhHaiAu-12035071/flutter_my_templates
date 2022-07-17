import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import { ItemLanguage, ItemLanguageProps } from '../ItemLanguage/ItemLanguage';

interface ListLanguageProps {
  arr?: Array<ItemLanguageProps>;
}

const ListLanguage = ({ arr = [] }: ListLanguageProps): React.ReactElement => {
  return (
    <Box {...styles.container}>
      <Box {...styles.wrapperContent}>
        <Box {...styles.wrapperContent_Title}>
          <Text>Languages</Text>
        </Box>
        {arr?.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <ItemLanguage {...item} />
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export { ListLanguage };

export type { ListLanguageProps };

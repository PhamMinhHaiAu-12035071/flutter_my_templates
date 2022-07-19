import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import { ItemLanguage, ItemLanguageProps } from '../ItemLanguage/ItemLanguage';
import { useTranslation } from 'react-i18next';
import { checkedSpinner, CustomSpinner, Snackbar } from '@commander/ui-kit';
import _ from 'lodash';

interface ListLanguageProps {
  readonly arr?: Array<ItemLanguageProps>;
  readonly count: number;
  readonly resetCount: () => void;
}

const ListLanguage = ({
  arr = [],
  count,
  resetCount,
}: ListLanguageProps): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <Box {...styles.container}>
      <Box {...styles.wrapperContent}>
        <Box {...styles.wrapperContent_Title}>
          <Text {...styles.wrapperContent_TextTitle}>{t('language')
						.split(' ')
						.map(_.capitalize)
						.join(' ')}</Text>
        </Box>
        {arr?.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <ItemLanguage {...item} />
            </React.Fragment>
          );
        })}

        <Box {...styles.wrapperNotify}>
          {count > 0 && (
            <Snackbar onComplete={resetCount}>
              <Box>
                <CustomSpinner
                  spinner={checkedSpinner}
                  colorSpinner={'green'}
                />
              </Box>
              <Box>
                <Text>{t('notifyChangeLanguageSuccess')}</Text>
              </Box>
            </Snackbar>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { ListLanguage };

export type { ListLanguageProps };

import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { ItemLanguage } from '../ItemLanguage/ItemLanguage';
import { ListLanguageModel } from '../../../infrastructure/models/ListLanguageModel';
import { LanguageModel } from '../../../infrastructure/models/LanguageModel';
import { NotifyChangeLanguageController } from '../NotifyChangeLanguage/NotifyChangeLanguage.controller';

interface ListLanguageProps {
  readonly list?: ListLanguageModel;
}

const ListLanguage: React.FC<ListLanguageProps> = ({
  list = new ListLanguageModel([]),
}: ListLanguageProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Box {...styles.container}>
      <Box {...styles.wrapperContent}>
        <Box {...styles.wrapperContent_Title}>
          <Text {...styles.wrapperContent_TextTitle}>
            {t('language').split(' ').map(_.capitalize).join(' ')}
          </Text>
        </Box>
        {list.arr?.map((item: LanguageModel): React.ReactElement => {
          return (
            <React.Fragment key={item.id}>
              <ItemLanguage item={item} />
            </React.Fragment>
          );
        })}
        <NotifyChangeLanguageController />
      </Box>
    </Box>
  );
};

export { ListLanguage };

export type { ListLanguageProps };

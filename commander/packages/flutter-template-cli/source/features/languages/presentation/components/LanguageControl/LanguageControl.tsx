import React from 'react';
import _ from 'lodash';
import { Box, Text, Newline, Spacer } from 'ink';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

const LanguageControl: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <Box {...styles.wrapperControl}>
      <Text>
        <Text {...styles.wrapperControl_TextGuide}>
          {_.upperFirst(t('guide'))}
          {':'}
        </Text>
        <Newline count={2} />
        <Text>
          {t('guideArrowKey')}{' '}
          <Text {...styles.wrapperControl_TextGreen}>Enter.</Text>
        </Text>
      </Text>
      <Text>
        {_.upperFirst(t('press'))}{' '}
        <Text {...styles.wrapperControl_TextGreen}>b</Text> {t('toBack')}
      </Text>
      <Spacer />
      <Text>
        {_.upperFirst(t('press'))}{' '}
        <Text {...styles.wrapperControl_TextQuit}>q</Text> {t('toQuit')}
      </Text>
      <Spacer />
    </Box>
  );
};

export { LanguageControl };

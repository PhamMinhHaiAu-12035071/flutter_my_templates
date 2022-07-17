import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { QuestionInstallFlutter } from './components/QuestionInstallFlutter/QuestionInstallFlutter';

const ToolGenerateScreen = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <Box {...styles.container}>
      <Box {...styles.wrapperTitle}>
        <Text {...styles.wrapperTextTitle}>
          {t('createTemplateFlutterBlocNavigator2')}
        </Text>
      </Box>
      <Box {...styles.wrapperContent}>
        <Box {...styles.wrapperContent_Question}>
          <QuestionInstallFlutter />
        </Box>
      </Box>
    </Box>
  );
};

export { ToolGenerateScreen };

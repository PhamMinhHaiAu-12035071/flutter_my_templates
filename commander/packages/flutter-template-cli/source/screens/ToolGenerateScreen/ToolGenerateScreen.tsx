import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { QuestionInstallFlutter } from './components/QuestionInstallFlutter/QuestionInstallFlutter';

const ToolGenerateScreen = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
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
			<Box>
				<Text>Press Y or N to choose</Text>
			</Box>
		</React.Fragment>
  );
};

export { ToolGenerateScreen };

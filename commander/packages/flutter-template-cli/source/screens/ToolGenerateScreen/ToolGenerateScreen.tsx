import React from 'react';
import { Box, Text, Newline, useInput, useApp, Spacer } from 'ink';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { QuestionInstallFlutter } from './components/QuestionInstallFlutter/QuestionInstallFlutter';
import _ from 'lodash';
import { PATH, RouterContext } from '../../router/RouterContext';

const ToolGenerateScreen = (): React.ReactElement => {
  const { t } = useTranslation();
	const router = React.useContext(RouterContext);
	const { exit } = useApp();

	useInput((input, _key) => {
		if (input === 'q') {
			exit();
		} else if (input === 'b') {
			router.changeScreen(PATH.MENU_SCREEN);
		}
	})

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
			<Box {...styles.wrapperControl}>
				<Text>
					<Text {...styles.wrapperControl_TextGuide}>{_.upperFirst(t('guide'))}{':'}</Text>
					<Newline count={2} />
					<Text>
						{t('guideQuestionInstallFlutter')}{' '}
						<Text {...styles.wrapperControl_TextGreen}>Enter.</Text>
					</Text>
				</Text>
				<Text>
					{_.upperFirst(t('press'))}{' '}<Text {...styles.wrapperControl_TextGreen}>b</Text>{' '}{t('toBack')}
				</Text>
				<Spacer />
				<Text>
					{_.upperFirst(t('press'))}{' '}<Text {...styles.wrapperControl_TextQuit}>q</Text>{' '}{t('toQuit')}
				</Text>
				<Spacer />
			</Box>
		</React.Fragment>
  );
};

export { ToolGenerateScreen };

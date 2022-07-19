import React from 'react';
import { Box, Newline, Spacer, Text, useApp, useInput } from 'ink';
import { useTranslation } from 'react-i18next';
import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Text';
import _ from 'lodash';
import { PATH, RouterContext } from '../../../../router/RouterContext';
import { detectChip, detectOS } from '@commander/utilities';

const QuestionInstallFlutterScreenNoConfirm = (): React.ReactElement => {
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
	detectChip();
	return (
		<React.Fragment>
			<Box {...styles.container}>
				<Box {...styles.wrapperTitle}>
					<Text {...styles.wrapperTextTitle}>
						{t('createTemplateFlutterBlocNavigator2')}
					</Text>
				</Box>
				<Box {...styles.wrapperContent}>
					<Box {...styles.wrapperContent_Row}>
						<Text>{t('questionInstallFlutter')}</Text>
						<Text {...styles.wrapperControl_TextGreen}>{_.repeat(' ', 1)}No</Text>
					</Box>
					<Box {...styles.wrapperContent_Row}>
						<Text>{t('detectOperatingSystem')}</Text>
						<Text {...styles.wrapperControl_TextGreen}>{_.repeat(' ', 1)}{detectOS()}</Text>
					</Box>
					<Box {...styles.wrapperContent_Row}>
						<Text>{t('detectChipSystem')}</Text>
						<Text {...styles.wrapperControl_TextGreen}>{_.repeat(' ', 1)}{detectChip()}</Text>
					</Box>
					<Box>

					</Box>
					<Box>

					</Box>
					<Box>

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

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		borderStyle: 'round',
		borderColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
		paddingY: 1,
	} as Styles,
	wrapperTitle: {
		display: 'flex',
		flexDirection: 'row',
	} as Styles,
	wrapperTextTitle: {
		backgroundColor: 'blue',
	} as Props,
	wrapperContent: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: 1,
	} as Styles,
	wrapperContent_Row: {
		display: 'flex',
		flexDirection: 'row',
	} as Styles,
	wrapperControl: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: 2,
	} as Styles,
	wrapperControl_TextGuide: {
		bold: true,
		underline: true,
		color: 'yellow',
	} as Props,
	wrapperControl_TextGreen: {
		bold: true,
		color: 'green',
	} as Props,
	wrapperControl_TextQuit: {
		color: 'yellow',
		bold: true,
	} as Props,
};


export { QuestionInstallFlutterScreenNoConfirm };

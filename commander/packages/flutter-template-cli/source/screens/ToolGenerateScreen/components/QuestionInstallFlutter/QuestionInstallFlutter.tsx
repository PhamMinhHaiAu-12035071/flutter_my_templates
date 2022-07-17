import React from 'react';
import { Box, Text, useInput } from 'ink';
import { CircleOption, TypingAnimation } from '@commander/ui-kit';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const QuestionInstallFlutter = (): React.ReactElement => {
	useInput((_input, _key) => {

	});
  return <QuestionInstallFlutterView />;
};

const QuestionInstallFlutterView = (): React.ReactElement => {
	const {t} = useTranslation();

	return (
			<Box {...styles.container}>
				<Box {...styles.wrapperTitle}>
					<TypingAnimation text={t('questionInstallFlutter')} />
				</Box>
				<Box {...styles.wrapperConfirm}>
					<Box {...styles.wrapperConfirm_Action}>
						<Box {...styles.wrapperConfirm_ActionCircle}>
							<Text color={'green'}>
								<CircleOption />
							</Text>
						</Box>
						<Box>
							<Text>{_.upperFirst(t('yes'))}</Text>
						</Box>
					</Box>
					<Box {...styles.wrapperConfirm_Action}>
						<Box {...styles.wrapperConfirm_ActionCircle}>
							<Text color={'green'}>
								<CircleOption />
							</Text>
						</Box>
						<Box>
							<Text>{_.upperFirst(t('no'))}</Text>
						</Box>
					</Box>
				</Box>
			</Box>
	);
}

export { QuestionInstallFlutter };

import React from 'react';
import { Box, Text } from 'ink';
import { CircleOption, TypingAnimation } from '@commander/ui-kit';
import { styles } from './styles';

const QuestionInstallFlutter = (): React.ReactElement => {
  return <QuestionInstallFlutterView />;
};

const QuestionInstallFlutterView = (): React.ReactElement => {
	return (
		<Box {...styles.container}>
			<Box {...styles.wrapperTitle}>
				<TypingAnimation text={'Have you installed Flutter yet ?'} />
			</Box>
			<Box {...styles.wrapperConfirm}>
				<Box {...styles.wrapperConfirm_Action}>
					<Box {...styles.wrapperConfirm_ActionCircle}>
						<Text color={'green'}>
							<CircleOption />
						</Text>
					</Box>
					<Box>
						<Text>Yes</Text>
					</Box>
				</Box>
				<Box {...styles.wrapperConfirm_Action}>
					<Box {...styles.wrapperConfirm_ActionCircle}>
						<Text color={'green'}>
							<CircleOption />
						</Text>
					</Box>
					<Box>
						<Text>No</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export { QuestionInstallFlutter };

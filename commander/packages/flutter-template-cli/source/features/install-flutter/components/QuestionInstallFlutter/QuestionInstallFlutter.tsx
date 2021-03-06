import React from 'react';
import { Box, Text, useInput } from 'ink';
import { CircleOption, TypingAnimation } from '@commander/ui-kit';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const QuestionInstallFlutter = (): React.ReactElement => {
  const [isYes, setIsYes] = React.useState<boolean>(true);

  const _handlePressYes = (): void => {
    console.log('you press yes');
  };

  const _handlePressNo = (): void => {
    return;
  };
  useInput((input, key) => {
    if (key['leftArrow'] || input === 'a') {
      if (!isYes) {
        setIsYes(true);
      }
    } else if (key['rightArrow'] || input === 'd') {
      if (isYes) {
        setIsYes(false);
      }
    }

    if (key.return) {
      if (isYes) {
        _handlePressYes();
      } else {
        _handlePressNo();
      }
    }
  });
  return <QuestionInstallFlutterView isYes={isYes} />;
};

interface QuestionInstallFlutterViewProps {
  isYes?: boolean;
}
const QuestionInstallFlutterView = ({
  isYes = true,
}: QuestionInstallFlutterViewProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Box {...styles.container}>
      <Box {...styles.wrapperTitle}>
        <TypingAnimation text={t('questionInstallFlutter')} />
      </Box>
      <Box {...styles.wrapperConfirm}>
        <Box {...styles.wrapperConfirm_Action}>
          <Box {...styles.wrapperConfirm_ActionCircle}>
            <Text color={isYes ? 'green' : 'white'}>
              <CircleOption isChecked={isYes} />
            </Text>
          </Box>
          <Box>
            <Text color={isYes ? 'green' : 'white'}>
              {_.upperFirst(t('yes'))}
            </Text>
          </Box>
        </Box>
        <Box {...styles.wrapperConfirm_Action}>
          <Box {...styles.wrapperConfirm_ActionCircle}>
            <Text color={isYes ? 'white' : 'green'}>
              <CircleOption isChecked={!isYes} />
            </Text>
          </Box>
          <Box>
            <Text color={isYes ? 'white' : 'green'}>
              {_.upperFirst(t('no'))}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { QuestionInstallFlutter };

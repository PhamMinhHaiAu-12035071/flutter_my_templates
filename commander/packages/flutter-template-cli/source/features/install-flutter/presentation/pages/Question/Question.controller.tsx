import React from 'react';
import { Box, Text, Newline, useInput, useApp, Spacer } from 'ink';
import { useTranslation } from 'react-i18next';
import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Text';
import _ from 'lodash';
import { QuestionInstallFlutter } from '../../../components/QuestionInstallFlutter/QuestionInstallFlutter';

const QuestionController: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const { exit } = useApp();

  useInput((input) => {
    if (input === 'q') {
      exit();
    }
  });

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
          <Text {...styles.wrapperControl_TextGuide}>
            {_.upperFirst(t('guide'))}
            {':'}
          </Text>
          <Newline count={2} />
          <Text>
            {t('guideQuestionInstallFlutter')}{' '}
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
    </React.Fragment>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'round',
    borderColor: 'green',
    paddingY: 1,
  } as Styles,
  wrapperTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  wrapperContent_Question: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

export { QuestionController };

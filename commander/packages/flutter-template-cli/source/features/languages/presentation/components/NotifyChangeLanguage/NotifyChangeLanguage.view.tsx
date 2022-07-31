import React from 'react';
import { Box, Text } from 'ink';
import { checkedSpinner, CustomSpinner, Snackbar } from '@commander/ui-kit';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import {
  NotifyChangeState,
  NotifyChangeStateSuccess,
} from '../../bloc/NotifyChangeState';

interface NotifyChangeLanguageViewProps {
  readonly state: NotifyChangeState;
  readonly resetNotify: () => void;
}
const NotifyChangeLanguageView: React.FC<NotifyChangeLanguageViewProps> = (
  props: NotifyChangeLanguageViewProps,
): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Box {...styles.wrapperNotify}>
      {props.state instanceof NotifyChangeStateSuccess && (
        <Snackbar onComplete={props.resetNotify}>
          <Box>
            <CustomSpinner spinner={checkedSpinner} colorSpinner={'green'} />
          </Box>
          <Box>
            <Text>{t('notifyChangeLanguageSuccess')}</Text>
          </Box>
        </Snackbar>
      )}
    </Box>
  );
};

export { NotifyChangeLanguageView };

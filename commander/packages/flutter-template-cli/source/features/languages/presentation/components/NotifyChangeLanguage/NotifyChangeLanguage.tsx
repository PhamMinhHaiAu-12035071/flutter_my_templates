import React from 'react';
import { Box, Text } from 'ink';
import { checkedSpinner, CustomSpinner, Snackbar } from '@commander/ui-kit';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { useBloc } from '../../../../core/state';
import { NotifyChangeBloc } from '../../bloc/NotifyChangeBloc';
import { NotifyChangeStateSuccess } from '../../bloc/NotifyChangeState';
import { NotifyChangeEventReset } from '../../bloc/NotifyChangeEvent';

const NotifyChangeLanguage: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const [state, bloc] = useBloc(NotifyChangeBloc);

  React.useEffect(() => {
    bloc.initState();
  }, []);

  const _resetNotify = (): void => {
    bloc.add(new NotifyChangeEventReset());
  };

  return (
    <Box {...styles.wrapperNotify}>
      {state instanceof NotifyChangeStateSuccess && (
        <Snackbar onComplete={_resetNotify}>
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

export { NotifyChangeLanguage };

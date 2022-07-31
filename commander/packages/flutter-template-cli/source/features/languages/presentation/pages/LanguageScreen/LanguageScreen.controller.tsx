import React from 'react';
import { useApp, useInput } from 'ink';
import { useTranslation } from 'react-i18next';
import {
  LanguageEventChanged,
  LanguageEventMoveDown,
  LanguageEventMoveUp,
} from '../../bloc/LanguageEvent';
import { LanguageStateChangedSuccess } from '../../bloc/LanguageState';
import { LanguageBloc } from '../../bloc/LanguageBloc';
import { useBloc } from '../../../../core/state';
import { LanguageScreenView } from './LanguageScreen.view';
import { BackWrapper } from '../../../../../common/components/BackWrapper/BackWrapper';

const LanguageScreenController = (): React.ReactElement => {
  const [state, bloc] = useBloc(LanguageBloc);
  const { exit } = useApp();
  const { i18n } = useTranslation();

  useInput((input, key) => {
    if (input === 'q') {
      exit();
    }
    if (key.return) {
      bloc.add(new LanguageEventChanged());
    }
    if (key['upArrow'] || input === 'w') {
      bloc.add(new LanguageEventMoveUp());
    } else if (key['downArrow'] || input === 's') {
      bloc.add(new LanguageEventMoveDown());
    }
  });

  React.useEffect(() => {
    if (state instanceof LanguageStateChangedSuccess) {
      if (state.items.selectedElement) {
        i18n['changeLanguage'](state.items.selectedElement.locale);
      }
    }
  }, [state]);

  return (
    <BackWrapper keyBack={'b'}>
      <LanguageScreenView state={state} />
    </BackWrapper>
  );
};

export { LanguageScreenController };

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
import { RouterBloc } from '../../../../../router/bloc/RouterBloc';
import { RouterEventNavigateToMenuScreen } from '../../../../../router/bloc/RouterEvent';

const LanguageScreenController = (): React.ReactElement => {
  const [state, bloc] = useBloc(LanguageBloc);
  const [, blocRouter] = useBloc(RouterBloc);
  const { exit } = useApp();
  const { i18n } = useTranslation();

  useInput((input, key) => {
    if (input === 'q') {
      exit();
    } else if (input === 'b') {
      blocRouter.add(new RouterEventNavigateToMenuScreen());
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

  return <LanguageScreenView state={state} />;
};

export { LanguageScreenController };

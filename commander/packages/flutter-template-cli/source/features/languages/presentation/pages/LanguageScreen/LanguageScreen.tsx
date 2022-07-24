import React from 'react';
import { Box, useApp, useInput } from 'ink';
import 'reflect-metadata';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { PATH, RouterContext } from '../../../../../router/RouterContext';

import { ListLanguage } from '../../components/ListLanguage/ListLanguage';
import {
  LanguageEventChanged,
  LanguageEventMoveDown,
  LanguageEventMoveUp,
} from '../../bloc/LanguageEvent';
import {
  LanguageStateChangedSuccess,
  LanguageStateFocusChanged,
  LanguageStateLoaded,
} from '../../bloc/LanguageState';
import { LanguageBloc } from '../../bloc/LanguageBloc';
import { useBloc } from '../../../../core/state';
import { LanguageControl } from '../../components/LanguageControl/LanguageControl';

const LanguageScreen = (): React.ReactElement => {
  const [state, bloc] = useBloc(LanguageBloc);

  const { exit } = useApp();
  const router = React.useContext(RouterContext);
  const { i18n } = useTranslation();

  useInput((input, key) => {
    if (input === 'q') {
      exit();
    } else if (input === 'b') {
      router.changeScreen(PATH.MENU_SCREEN);
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
    <Box {...styles.container}>
      {[
        LanguageStateLoaded,
        LanguageStateFocusChanged,
        LanguageStateChangedSuccess,
      ].some((item) => state instanceof item) && (
        <ListLanguage list={state.items} />
      )}
      <LanguageControl />
    </Box>
  );
};

export { LanguageScreen };

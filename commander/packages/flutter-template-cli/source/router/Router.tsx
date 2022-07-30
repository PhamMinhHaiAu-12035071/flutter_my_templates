import React from 'react';
import { useBloc } from '../features/core/state';
import { MenuScreenController } from '../features/menu/presentation/pages/MenuScreen/MenuScreen.controller';

import { RouterBloc } from './bloc/RouterBloc';
import {
  RouterStateInitial,
  RouterStateLanguageScreen,
  RouterStateMenuScreen,
} from './bloc/RouterState';
import { LanguageScreenController } from '../features/languages/presentation/pages/LanguageScreen/LanguageScreen.controller';

const Router: React.FC = (): React.ReactElement => {
  const [state] = useBloc(RouterBloc);

  const _renderRouter = (): React.ReactElement | null => {
    if (
      state instanceof RouterStateInitial ||
      state instanceof RouterStateMenuScreen
    ) {
      return <MenuScreenController />;
    } else if (state instanceof RouterStateLanguageScreen) {
      return <LanguageScreenController />;
    }
    return null;
  };
  return <React.Fragment>{_renderRouter()}</React.Fragment>;
};

export { Router };

import React from 'react';
import { RouterBloc } from '../bloc/RouterBloc';
import { useBloc } from '../../features/core/state';
import {
  RouterStateInitial,
  RouterStateLanguageScreen,
  RouterStateMenuScreen,
} from '../bloc/RouterState';
import { MenuScreenController } from '../../features/menu/presentation/pages/MenuScreen/MenuScreen.controller';
import { LanguageScreenController } from '../../features/languages/presentation/pages/LanguageScreen/LanguageScreen.controller';
import { provideBackRouterUseCase } from '../di/DependenciesProvider';

const MainRouter: React.FC = (): React.ReactElement => {
  const [state, bloc] = useBloc(RouterBloc);

  React.useEffect(() => {
    provideBackRouterUseCase(bloc);
  }, []);

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

export { MainRouter };

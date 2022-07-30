import React from 'react';
import { PATH, RouterContext } from './RouterContext';
import { ToolGenerateScreen } from '../features/ToolGenerateScreen/ToolGenerateScreen';
import { LanguageScreenController } from '../features/languages/presentation/pages/LanguageScreen/LanguageScreen.controller';
import { MenuScreenController } from '../features/menu/presentation/pages/MenuScreen/MenuScreen.controller';

const RootRouter = (): React.ReactElement | null => {
  const router = React.useContext(RouterContext);
  if (router.screenName === PATH.MENU_SCREEN) {
    return <MenuScreenController />;
  } else if (router.screenName === PATH.LANGUAGE_SCREEN) {
    return <LanguageScreenController />;
  } else if (router.screenName === PATH.TOOL_GENERATE_SCREEN) {
    return <ToolGenerateScreen />;
  }
  return null;
};

export { RootRouter };

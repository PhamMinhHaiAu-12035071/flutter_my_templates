import React from 'react';
import { RootRouter } from './router/RootRouter';
import { PATH, RouterContext } from './router/RouterContext';
import './services/i18n';

const App = (): React.ReactElement => {
  const [screen, changeScreen] = React.useState<PATH>(PATH.MENU_SCREEN);
  return (
    <RouterContext.Provider
      value={{
        screenName: screen,
        changeScreen: changeScreen,
      }}
    >
      <RootRouter />
    </RouterContext.Provider>
  );
};
export { App };

import React from 'react';
import { RootRouter } from './router/RootRouter';
import { PATH, RouterContext } from './router/RouterContext';
import './services/i18n';
import { Language } from './Language';

const App = (): React.ReactElement => {
  const [screen, changeScreen] = React.useState<PATH>(PATH.MENU_SCREEN);

  return (
    <RouterContext.Provider
      value={{
        screenName: screen,
        changeScreen: changeScreen,
      }}
    >
      <Language>
        <RootRouter />
      </Language>
    </RouterContext.Provider>
  );
};
export { App };

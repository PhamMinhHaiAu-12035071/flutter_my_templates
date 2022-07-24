import React from 'react';
import {
  TOOL_GENERATE_PATH,
  ToolGenerateRouterContext,
} from './ToolGenerateRouterContext';
import { ToolGenerateRouter } from './ToolGenerateRouter';

const ToolGenerateScreen = (): React.ReactElement | null => {
  const [screen, changeScreen] = React.useState<TOOL_GENERATE_PATH>(
    TOOL_GENERATE_PATH.QUESTION_INSTALL_FLUTTER_SCREEN,
  );

  return (
    <ToolGenerateRouterContext.Provider
      value={{
        screenName: screen,
        changeScreen: changeScreen,
      }}
    >
      <ToolGenerateRouter />
    </ToolGenerateRouterContext.Provider>
  );
};

export { ToolGenerateScreen };

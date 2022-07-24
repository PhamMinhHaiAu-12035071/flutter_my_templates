import React from 'react';

const enum TOOL_GENERATE_PATH {
  QUESTION_INSTALL_FLUTTER_SCREEN = 'QUESTION_INSTALL_FLUTTER_SCREEN',
  QUESTION_INSTALL_FLUTTER_SCREEN_NO_CONFIRM = 'QUESTION_INSTALL_FLUTTER_SCREEN_NO_CONFIRM',
}

interface ToolGenerateRouterContextData {
  screenName: TOOL_GENERATE_PATH;
  changeScreen: (newScreen: TOOL_GENERATE_PATH) => void;
}

const routerContextDefaultValue: ToolGenerateRouterContextData = {
  screenName: TOOL_GENERATE_PATH.QUESTION_INSTALL_FLUTTER_SCREEN,
  changeScreen: () => null,
};

const ToolGenerateRouterContext = React.createContext(
  routerContextDefaultValue,
);

export {
  ToolGenerateRouterContext,
  TOOL_GENERATE_PATH,
  routerContextDefaultValue,
};

export type { ToolGenerateRouterContextData };

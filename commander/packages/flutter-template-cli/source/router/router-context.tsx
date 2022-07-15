import React from "react";

const enum PATH {
	MENU_SCREEN = 'MENU_SCREEN',
	TOOL_GENERATE_SCREEN = 'TOOL_GENERATE_SCREEN'
}

interface RouterContextData {
	screenName: PATH,
	changeScreen: (newScreen: PATH) => void;
}

const routerContextDefaultValue: RouterContextData = {
	screenName: PATH.MENU_SCREEN,
	changeScreen: () => null,
}
const RouterContext = React.createContext(routerContextDefaultValue);

export {
	RouterContext,
	PATH
}

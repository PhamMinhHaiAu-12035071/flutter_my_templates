import {MenuScreen} from "../screens/MenuScreen/MenuScreen";
import React from "react";
import {PATH, RouterContext} from "./router-context";
import {ToolGenerateScreen} from "../screens/ToolGenerateScreen/ToolGenerateScreen";

const RootRouter = (): React.ReactElement | null => {
	const router = React.useContext(RouterContext);
	if(router.screenName === PATH.MENU_SCREEN) {
		return <MenuScreen />
	} else if (router.screenName === PATH.TOOL_GENERATE_SCREEN) {
		return <ToolGenerateScreen />
	}
	return null;
}

export {
	RootRouter,
}

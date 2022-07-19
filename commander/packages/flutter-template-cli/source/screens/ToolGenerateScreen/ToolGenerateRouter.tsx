import React from 'react';
import { TOOL_GENERATE_PATH, ToolGenerateRouterContext } from './ToolGenerateRouterContext';
import {
	QuestionInstallFlutterScreenOriginal
} from './screens/QuestionInstallFlutterScreenOriginal/QuestionInstallFlutterScreenOriginal';
import {
	QuestionInstallFlutterScreenNoConfirm
} from './screens/QuestionInstallFlutterScreenNoConfirm/QuestionInstallFlutterScreenNoConfirm';


const ToolGenerateRouter = (): React.ReactElement | null => {
	const router = React.useContext(ToolGenerateRouterContext);

	if(router.screenName === TOOL_GENERATE_PATH.QUESTION_INSTALL_FLUTTER_SCREEN) {
		return <QuestionInstallFlutterScreenOriginal />
	} else if (router.screenName === TOOL_GENERATE_PATH.QUESTION_INSTALL_FLUTTER_SCREEN_NO_CONFIRM) {
		return <QuestionInstallFlutterScreenNoConfirm />
	}
 	return null;
}


export {
	ToolGenerateRouter,
}

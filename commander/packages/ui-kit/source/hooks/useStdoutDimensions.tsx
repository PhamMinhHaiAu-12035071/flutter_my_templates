import React from 'react';
import {logMessage} from "@commander/utilities";

function useStdoutDimensions(): [number, number] {

	const [dimensions, _setDimensions] = React.useState<[number, number]>([0, 0])
	const renderSize = async () => {
		const {default: terminalSize} = await import('term-size');
		const size = terminalSize();
		console.log(`show size: ${logMessage(size)}`)
	}
	React.useEffect(() => {
		renderSize();
	}, []);

	return dimensions;
}

export {
	useStdoutDimensions,
}

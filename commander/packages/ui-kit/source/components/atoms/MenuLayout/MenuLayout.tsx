import {Box, Text} from "ink";
import {Styles} from "ink/build/styles";
import * as React from "react";
import terminalSize from 'term-size';

const RATIO_WIDTH = 0.6125;

const MenuLayout = (): React.ReactElement => {
	const {columns} = terminalSize();
	const width = columns * RATIO_WIDTH;
	const marginLeft = (columns - width) * 0.5;

	return (
		<Box {...styles.container} marginLeft={marginLeft} width={width}>
			<Text>Title</Text>
		</Box>
	)
};

const styles = {
	container: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		borderStyle: 'round',
		borderColor: 'green'
	} as Styles,
}
export {
	MenuLayout,
}

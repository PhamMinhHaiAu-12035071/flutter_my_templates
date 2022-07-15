import { Box, Text } from "ink";
import { Styles } from "ink/build/styles";
import React from "react";
import {styles} from "./styles";
import _ from 'lodash';
import {PATH} from "../../../../router/router-context";

interface ItemMenuProps {
	id: string;
	name: string;
	screen: PATH;
	style?: Styles
}
const ItemMenu = ({id, name, style}: ItemMenuProps): React.ReactElement => {
	return (
		<Box {..._.merge(styles.container, style)}>
			<Box {...styles.wrapperId}>
				<Text>[{id}]</Text>
			</Box>
			<Box {...styles.wrapperText}>
				<Text>{name}</Text>
			</Box>
		</Box>
	)
};

export {
	ItemMenu,
}

export type {
	ItemMenuProps,
}

import {Box, Text} from "ink"
import React from "react"
import {styles} from "./styles";

const Header = (): React.ReactElement => {
	return (
		<Box {...styles.container}>
			<Box {...styles.wrapperTitle}>
				<Text>
					Tool generate template Flutter
				</Text>
			</Box>
		</Box>
	)
}

export {
	Header,
}

import React from 'react';
import {Box} from 'ink';
import Image from '@commander/image-cli';
import * as path from "path";

const App = () => {
	return (
		<Box>
			<Image
				marginTop={5}
				path={path.resolve(__dirname, "../assets/images/download.png")}
				options={{
					width: '50%',
					height: '50%',
					preserveAspectRatio: true,
				}}
			/>
		</Box>
	)
};

module.exports = App;
export default App;

import React from 'react';
import {Box} from 'ink';
import {Image, MenuLayout} from '@commander/ui-kit';
import {Styles} from 'ink/build/styles';
import {ListAssetImage} from "./constants/assetImage";

const App = (): React.ReactElement => {
	return (
		<Box {...styles.container}>
			<Box {...styles.previewContainer}>
				<Image
					marginTop={5}
					marginLeft={10}
					path={ListAssetImage.logoFlutter.path}
					options={{
						width: '50%',
						height: '50%',
						preserveAspectRatio: true,
					}}
				/>
			</Box>
			<MenuLayout/>
		</Box>
	)
};

const styles = {
	container: {
		flexDirection: 'column',
	} as Styles,
	previewContainer: {
		flexDirection: 'row',
	} as Styles,
}
export {App};


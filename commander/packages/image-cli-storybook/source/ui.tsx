import React from 'react';
import {Box} from 'ink';
import {Image} from '@commander/ui-kit';
import {Styles} from 'ink/build/styles';
import {Props} from 'ink/build/components/Text';
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
			<Box {...styles.wrapperControl}>
				<Box {...styles.wrapperTitle}>
				</Box>
			</Box>
		</Box>
	)
};

const styles = {
	container: {
		width: 138,
		flexDirection: 'column',
	} as Styles,
	previewContainer: {
		flexDirection: 'row',
	} as Styles,
	wrapperControl: {
		flexDirection: 'column',
	} as Styles,
	wrapperTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	} as Styles,
	wrapperControlLoadImage: {
		flexDirection: 'column',
	} as Styles,
	wrapperControlLoadImageTitle: {
		flexDirection: 'row',
	} as Styles,
	textControlLoadImageTitle: {
		color: '#64D2FF'
	} as Props,
	wrapperControlLoadImageSelectInput: {
		flexDirection: 'row',
	} as Styles,
}
export {App};


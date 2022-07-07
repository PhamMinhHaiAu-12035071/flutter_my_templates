import React from 'react';
import {Box, Text} from 'ink';
import Image from '@commander/image-cli';
import {ListAssetImage} from "./constants/assetImage";
import { Styles } from 'ink/build/styles';
import SelectInput from 'ink-select-input';
import { Props } from 'ink/build/components/Text';
import {detectTerminalMacOS, TerminalMacOs} from '@commander/utilities';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';


const Demo = () => {
	const handleSelect = (item: {label: string, value: string}) => {
		console.log(`show item: ${item}`);
	};
	const items = [
		{
			label: 'First',
			value: 'first'
		},
		{
			label: 'Second',
			value: 'second'
		},
		{
			label: 'Third',
			value: 'third'
		}
	];

	return (
		<Box {...styles.wrapperControl}>
			<Box {...styles.wrapperControlLoadImage}>
				<Box {...styles.wrapperControlLoadImageTitle}>
					<Text {...styles.textControlLoadImageTitle}>Load Image</Text>
				</Box>
				<Box {...styles.wrapperControlLoadImageSelectInput}>
					<SelectInput items={items} onSelect={handleSelect} />
				</Box>
			</Box>

		</Box>
	)
}
const App = () => {
	console.log('render');
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
			<Box width={process.stdout.rows}>
				<Gradient name="rainbow">
					<BigText text="unicorns"/>
				</Gradient>
			</Box>
			<Demo />

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
	wrapperControl: {
		flexDirection: 'row',
		borderStyle: detectTerminalMacOS() === TerminalMacOs.ITERM ? undefined : 'single',
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
module.exports = App;
export default App;

import React from 'react';
import {Box, useStdout, Text} from 'ink';
import {BoxResponsive, Image, Title, useStdoutDimensions} from '@commander/ui-kit';
import {Styles} from 'ink/build/styles';
import {Props} from 'ink/build/components/Text';
import _ from 'lodash';
import {ListAssetImage} from "./constants/assetImage";

interface SizeType {
	width: number;
	height: number;
}

function useScreenSize(): SizeType {
	const { stdout } = useStdout() as any;

	const [size, setSize] = React.useState(() => ({
		width: stdout.columns,
		height: stdout.rows,
	}));

	React.useEffect(() => {
		const onResize = () =>
			setSize({
				width: stdout.columns,
				height: stdout.rows,
			});

		stdout.on(`resize`, onResize);
		return () => void stdout.off(`resize`, onResize);
	}, [stdout]);

	return size;
}
const App = (): React.ReactElement => {
	useStdoutDimensions();
	const { width, height } = useScreenSize();
	console.log(width, height)
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
			<Box {..._.merge(styles.wrapperControl, {})}>
				<Box {...styles.wrapperTitle}>
					<Title title={'hello'}/>
				</Box>
			</Box>
			<BoxResponsive>
				<Text>demo</Text>
			</BoxResponsive>
		</Box>
	)
};

const styles = {
	container: {
		flexDirection: 'column',
		width: 138,
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
export default App;

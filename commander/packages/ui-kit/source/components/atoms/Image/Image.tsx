import React from 'react';
import {Box, Text} from 'ink';
import {Styles} from 'ink/build/styles';
import {detectTerminalMacOS, TerminalMacOs} from "@commander/utilities";
import _ from 'lodash';

const SPACE_CHARACTER = ' ';
/**
 * Render string text from image asset
 * @param imageProps
 */
const loadStringFromImage = async (imageProps: ImageProps): Promise<string> => {
	const { default: terminalImage } = await import('terminal-image');
	const result = await terminalImage.file(imageProps.path, imageProps.options);
	return Promise.resolve(result as string);
};

interface Spacing {
	marginLeft?: number;
	marginRight?: number;
	marginTop?: number;
	marginBottom?: number;
}
interface ImageProps extends Spacing {
	path: string;
	options?: Readonly<{
		width?: string | number;
		height?: string | number;
		preserveAspectRatio?: boolean;
	}>;
}

const Image = (props: ImageProps): React.ReactElement | null => {
	const [imageStr, setImageStr] = React.useState<string>('');

	React.useEffect(() => {
		loadStringFromImage(props).then(str => setImageStr(str as string));
	}, [props]);
	if (imageStr) {
		return (
			<ImageLayout imageStr={imageStr} {...props} />
		);
	}
	return null;
};

interface ImageLayoutProps extends Spacing {
	imageStr: string;
}
const ImageLayout = ({
						 marginTop = 0,
						 marginBottom = 0,
						 marginLeft = 0,
						 marginRight = 0,
						 imageStr = '',
					 }: ImageLayoutProps): React.ReactElement => {

	const renderBoxHorizontal = (x?: number): React.ReactElement | null => {
		if( typeof x === 'number' && x > 0 && detectTerminalMacOS() === TerminalMacOs.DEFAULT) {
			return <Box width={x} />;
		}
		return null;
	}

	const renderBoxHorizontalOnIterm = (x?: number): string => {
		if(typeof x === 'number' && x > 0 && detectTerminalMacOS() === TerminalMacOs.ITERM) {
			return _.repeat(SPACE_CHARACTER, x);
		}
		return '';
	}
	return (
		<Box {...displayColumn}>
			{marginTop > 0 && <Box height={marginTop} />}
			<Box {...displayRow}>
				{renderBoxHorizontal(marginLeft)}
				<Text>{renderBoxHorizontalOnIterm(marginLeft)}{imageStr}{renderBoxHorizontalOnIterm(marginRight)}</Text>
				{renderBoxHorizontal(marginRight)}
			</Box>
			{marginBottom > 0 && <Box height={marginBottom} />}
		</Box>
	);
};

/**
 * Define style
 */
const displayColumn: Styles = {
	flexDirection: 'column',
};
const displayRow: Styles = {
	flexDirection: 'row',
};

export {
	Image,
}

export type {
	ImageProps,
	ImageLayoutProps,
	Spacing,
}

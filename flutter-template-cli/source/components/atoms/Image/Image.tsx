// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from 'react';
import { Box, Text } from 'ink';
import { Styles } from 'ink/build/styles';
import _ from 'lodash';
import { SPACE_CHARACTER } from '../../../constants';
import chalk from 'chalk';

/**
 * Render string text from image asset
 * @param imageProps
 */
const loadStringFromImage = async (imageProps: ImageProps): Promise<string> => {
  const { default: terminalImage } = await import('terminal-image');
  const result = await terminalImage.file(imageProps.path, imageProps.options);
  return Promise.resolve(result);
};

const aspectRatioBetweenSpaceAndPoint = 3;

const convertSizeToSpace = (point: number): any => {
  return chalk.bgBlack(_.repeat(SPACE_CHARACTER, point * aspectRatioBetweenSpaceAndPoint));
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
    loadStringFromImage(props).then(str => setImageStr(str));
  }, [props]);
  if (imageStr) {
    return (
      <ImageLayout {...props}>
        <ImageView str={imageStr} />
      </ImageLayout>
    );
  }
  return null;
};

interface ImageLayoutProps extends Spacing {
  children: React.ReactElement;
}
const ImageLayout = ({
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  children,
}: ImageLayoutProps): React.ReactElement => {
  return (
    <Box {...displayColumn}>
      {marginTop > 0 && <Box height={marginTop} />}
      <Box {...displayRow}>
        <Box width={5}></Box>
        <Text>{children}</Text>
      </Box>
      {marginBottom > 0 && <Box height={marginBottom} />}
    </Box>
  );
};
interface ImageViewProps {
  str: string;
}
const ImageView = (props: ImageViewProps): React.ReactElement => {
  return <Text>{props.str}</Text>;
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

export { Image };

export type { ImageProps };

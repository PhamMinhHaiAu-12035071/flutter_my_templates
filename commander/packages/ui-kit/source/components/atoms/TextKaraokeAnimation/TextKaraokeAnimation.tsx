import React from 'react';
import { Text } from 'ink';
import { Props } from 'ink/build/components/Text';

interface TextKaraokeAnimationProps {
	text: string;
	isRunning?: boolean;
	styleOrigin?: Props;
	styleAnimation?: Props;
	fps?: number;
}

const TextKaraokeAnimation = ({
																text,
																isRunning = false,
																styleOrigin = {},
																styleAnimation = {},
																fps = 60,
															}: TextKaraokeAnimationProps): React.ReactElement => {
	const [indexAnimation, setIndexAnimation] = React.useState<number>(0);
	React.useEffect(() => {
		if (isRunning) {
			if (indexAnimation < text.split('').length - 1) {
				setTimeout(() => {
					setIndexAnimation((prevState) => prevState + 1);
				}, 1000 / fps);
			}
		} else {
			setIndexAnimation(-1);
		}
	}, [indexAnimation, isRunning, fps]);
	return (
		<Text {...styleOrigin}>
			{
				text.split('').map((item, index) => {
					if (index <= indexAnimation) {
						return (
							<Text key={index.toString()} {...styleAnimation}>{item}</Text>
						);
					}
					return (
						<Text key={index.toString()} {...styleOrigin}>{item}</Text>
					);
				})
			}
		</Text>
	);

};

export {
	TextKaraokeAnimation
};

export type {
	TextKaraokeAnimationProps
};

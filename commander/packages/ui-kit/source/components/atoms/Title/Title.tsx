import React from 'react';
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

interface TitleProps {
	title?: string;
}

const Title = ({title = ''}: TitleProps): React.ReactElement => {
	return (
			<Gradient name="rainbow">
				<BigText text={title}/>
			</Gradient>
	)
};

export {
	Title,
}

export type { TitleProps }

import boxen from 'boxen';
import {Transform} from 'ink';
import React from 'react';

interface BoxResponsiveProps {
	children: React.ReactElement;
}

const BoxResponsive = ({children}: BoxResponsiveProps): React.ReactElement => {
	return (
		<Transform transform={(_children: string) => boxen(_children, {width: 109})}>
			{children}
		</Transform>
	);
};

export {
	BoxResponsive,
}

export type {BoxResponsiveProps}

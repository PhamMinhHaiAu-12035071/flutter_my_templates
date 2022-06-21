import React, { useEffect, useState } from 'react';
import { Text } from 'ink';
import chalk from 'chalk';
import { Colors } from '../../constants';
import _ from 'lodash';

export type Spinner = {
  interval: number;
  frames: string[];
};

export interface CustomSpinnerProps {
  spinner: Spinner;
  colorSpinner?: string;
  arrText?: Array<React.ReactElement>;
}
export const CustomSpinner = ({
  spinner,
  colorSpinner = Colors.WHITE,
  arrText = [],
}: CustomSpinnerProps): React.ReactElement => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex(currentFrameIndex => {
        const isLastFrame = currentFrameIndex === spinner.frames.length - 1;
        return isLastFrame ? 0 : currentFrameIndex + 1;
      });
    }, spinner.interval);

    return () => {
      clearInterval(timer);
    };
  }, [spinner]);

  return (
    <Text>
      <>
        {chalk.hex(colorSpinner).visible(spinner.frames[frameIndex])}
        {!_.isEmpty(arrText) &&
          arrText.map((item, index: number) => {
            return <React.Fragment key={index.toString()}>{item}</React.Fragment>;
          })}
      </>
    </Text>
  );
};

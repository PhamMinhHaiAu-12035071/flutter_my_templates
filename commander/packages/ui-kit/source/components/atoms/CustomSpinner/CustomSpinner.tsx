import React, { useEffect, useState } from 'react';
import { Text } from 'ink';
import chalk from 'chalk';

type Spinner = {
  interval: number;
  frames: string[];
};

interface CustomSpinnerProps {
  readonly spinner: Spinner;
  readonly colorSpinner?: string;
}

const CustomSpinner = ({
  spinner,
  colorSpinner = 'white',
}: CustomSpinnerProps): React.ReactElement => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex((currentFrameIndex) => {
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
      {chalk.hex(colorSpinner ?? '#fff').visible(spinner.frames[frameIndex])}
    </Text>
  );
};

export { CustomSpinner };

export type { Spinner, CustomSpinnerProps };

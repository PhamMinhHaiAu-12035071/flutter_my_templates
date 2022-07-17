import spinners from 'cli-spinners';
import React from 'react';
import { Text } from 'ink';

interface CircleOptionProps {
  isChecked?: boolean;
}

const CircleOption = ({
  isChecked = false,
}: CircleOptionProps): React.ReactElement => {
  const spinner = spinners['toggle9'];
  if (isChecked) {
    return <Text>{spinner.frames[1]}</Text>;
  }
  return <Text>{spinner.frames[0]}</Text>;
};

export { CircleOption };

export type { CircleOptionProps };

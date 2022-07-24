import spinners from 'cli-spinners';
import React from 'react';
import { Text } from 'ink';

interface CircleOptionProps {
  readonly isChecked?: boolean;
}

const CircleOption = ({
  isChecked = false,
}: CircleOptionProps): React.ReactElement => {
  const spinnerChecked = spinners['toggle9'].frames[0];
  const spinnerUnchecked = spinners['toggle6'].frames[0];

  if (isChecked) {
    return <Text>{spinnerChecked}</Text>;
  }
  return <Text>{spinnerUnchecked}</Text>;
};

export { CircleOption };

export type { CircleOptionProps };

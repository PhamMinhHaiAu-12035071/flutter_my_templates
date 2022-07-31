import { useApp, useInput } from 'ink';
import React from 'react';

interface ExitApplicationProps {
  keyExit: string;
  children: React.ReactElement | Array<React.ReactElement>;
}

const ExitApplication: React.FC<ExitApplicationProps> = (
  props: ExitApplicationProps,
): React.ReactElement => {
  const { exit } = useApp();

  useInput((input) => {
    if (input === props.keyExit) {
      exit();
    }
  });

  return <React.Fragment>{props.children}</React.Fragment>;
};

export { ExitApplication };

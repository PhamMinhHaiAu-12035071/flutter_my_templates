import React from 'react';
import { Text } from 'ink';

let timeout: NodeJS.Timeout;

function ArrayPlusDelay(
  array: Array<unknown>,
  delegate: (item: unknown, index: number) => void,
  delay: number,
) {
  let i = 0;

  function loop() {
    // each loop, call passed in function
    delegate(array[i], i);

    // increment, and if we're still here, call again
    if (i++ < array.length - 1) timeout = setTimeout(loop, delay); //recursive
  }

  // seed first call
  timeout = setTimeout(loop, delay);
}

interface TypingAnimationProps {
  readonly text: string;
  readonly fps?: number;
}
const TypingAnimation = ({
  text,
  fps = 60,
}: TypingAnimationProps): React.ReactElement => {
  const [typing, setTyping] = React.useState<string>('');
  React.useEffect(() => {
    const arr = text.split('');
    const size = arr.length;
    ArrayPlusDelay(
      arr,
      function (_item, index) {
        if (index !== size) {
          setTyping(text.slice(0, index + 1));
        }
      },
      1000 / fps,
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return <Text>{typing}</Text>;
};

export { TypingAnimation };

export type { TypingAnimationProps };

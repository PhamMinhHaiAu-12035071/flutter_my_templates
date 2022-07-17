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

let timeout: NodeJS.Timeout;

function ArrayPlusDelay(
  array: Array<unknown>,
  delegate: Function,
  delay: number,
) {
  let i = 0;

  function loop() {
    // each loop, call passed in function
    delegate(array[i]);

    // increment, and if we're still here, call again
    if (i++ < array.length - 1) timeout = setTimeout(loop, delay); //recursive
  }

  // seed first call
  timeout = setTimeout(loop, delay);
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
    const arr = text.split('');
    if (isRunning) {
      ArrayPlusDelay(
        arr,
        function (_obj: unknown) {
          setIndexAnimation((prevState) => prevState + 1);
        },
        1000 / fps,
      );
    } else {
      setIndexAnimation(-1);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [text, isRunning, fps]);
  return (
    <Text {...styleOrigin}>
      {text.split('').map((item, index) => {
        if (index <= indexAnimation) {
          return (
            <Text key={index.toString()} {...styleAnimation}>
              {item}
            </Text>
          );
        }
        return (
          <Text key={index.toString()} {...styleOrigin}>
            {item}
          </Text>
        );
      })}
    </Text>
  );
};

export { TextKaraokeAnimation };

export type { TextKaraokeAnimationProps };

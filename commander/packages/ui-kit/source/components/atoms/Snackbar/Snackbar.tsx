import React from 'react';
import { Box } from 'ink';

interface SnackbarProps {
  duration?: number;
  children: React.ReactElement | Array<React.ReactElement>;
  onComplete?: () => void;
}

const Snackbar = ({
  children,
  duration = 1200,
  onComplete,
}: SnackbarProps): React.ReactElement | null => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  React.useEffect(() => {
		const timeDuration = duration ?? 1200;
		let isMounted = true;
		const timeout = setTimeout(() => {
			if (isMounted){
				setIsVisible(false);
				if (onComplete) {
					onComplete();
				}
			}
    }, timeDuration);
		return () => {
			isMounted = false;
			clearTimeout(timeout);
		}
  }, []);
  if (isVisible) {
    return <Box>{children}</Box>;
  }
  return null;
};

export { Snackbar };

export type { SnackbarProps };

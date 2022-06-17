import React, { useReducer } from 'react';
import { RootState, store } from '../stores';
import { useSelector } from 'react-redux';

export function useAppSelector<T>(funcSelector: (state: RootState) => T): T {
  const selector = useSelector<RootState, T>(funcSelector);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  React.useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return selector;
}

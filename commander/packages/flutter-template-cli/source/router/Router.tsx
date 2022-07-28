import React from 'react';
import { useBloc } from '../features/core/state';
import { MenuScreen } from '../features/menu/presentation/pages/MenuScreen/MenuScreen';
import { RouterBloc } from './bloc/RouterBloc';
import { RouterStateInitial } from './bloc/RouterState';

const Router: React.FC = (): React.ReactElement => {
  const [state] = useBloc(RouterBloc);

  return (
    <React.Fragment>
      {state instanceof RouterStateInitial && <MenuScreen />}
    </React.Fragment>
  );
};

export { Router };

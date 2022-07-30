import React from 'react';
import { useBloc } from '../../../../core/state';
import { MenuBloc } from '../../bloc/MenuBloc';
import { MenuEventFetchAll } from '../../bloc/MenuEvent';
import { MenuScreenView } from './MenuScreen.view';

const MenuScreenController = (): React.ReactElement => {
  const [state, bloc] = useBloc(MenuBloc);

  React.useEffect(() => {
    bloc.add(MenuEventFetchAll);
  }, []);

  return <MenuScreenView state={state} />;
};

export { MenuScreenController };

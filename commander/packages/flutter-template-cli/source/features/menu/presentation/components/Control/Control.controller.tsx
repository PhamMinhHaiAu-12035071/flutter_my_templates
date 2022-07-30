import { ControlView } from './Control.view';
import { useBloc } from '../../../../core/state';
import { MenuBloc } from '../../bloc/MenuBloc';
import React from 'react';
import {
  MenuEventLeave,
  MenuEventOnChange,
  MenuEventOnSubmit,
} from '../../bloc/MenuEvent';
import { useApp, useInput } from 'ink';
import { MenuStateConfirmChanged } from '../../bloc/MenuState';
import { RouterBloc } from '../../../../../router/bloc/RouterBloc';
import { RouterEventNavigateToLanguageScreen } from '../../../../../router/bloc/RouterEvent';

const ControlController: React.FC = (): React.ReactElement => {
  const [state, bloc] = useBloc(MenuBloc);
  const [, blocRouter] = useBloc(RouterBloc);
  const { exit } = useApp();
  const [query, setQuery] = React.useState<string>('');

  React.useEffect(() => {
    bloc.add(new MenuEventOnChange(query));
  }, [query]);

  React.useEffect(() => {
    if (state instanceof MenuStateConfirmChanged) {
      switch (state.items.selectedIndex) {
        case 0:
          bloc.add(new MenuEventLeave());
          blocRouter.add(new RouterEventNavigateToLanguageScreen());
          break;
        default:
          break;
      }
    }
  }, [state]);

  useInput((input, key) => {
    if (input === 'q') {
      exit();
    }
    if (key.return) {
      bloc.add(new MenuEventOnSubmit());
    }
  });

  return (
    <ControlView
      id={state.id}
      arr={state.items.arr}
      query={query}
      setQuery={setQuery}
    />
  );
};

export { ControlController };

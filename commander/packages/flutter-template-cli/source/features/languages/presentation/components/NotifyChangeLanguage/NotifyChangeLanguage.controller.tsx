import React from 'react';
import { useBloc } from '../../../../core/state';
import { NotifyChangeBloc } from '../../bloc/NotifyChangeBloc';
import { NotifyChangeEventReset } from '../../bloc/NotifyChangeEvent';
import { NotifyChangeLanguageView } from './NotifyChangeLanguage.view';

const NotifyChangeLanguageController: React.FC = (): React.ReactElement => {
  const [state, bloc] = useBloc(NotifyChangeBloc);

  const _resetNotify = (): void => {
    bloc.add(new NotifyChangeEventReset());
  };

  return <NotifyChangeLanguageView state={state} resetNotify={_resetNotify} />;
};

export { NotifyChangeLanguageController };

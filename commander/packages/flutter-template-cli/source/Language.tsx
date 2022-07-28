import React from 'react';
import { useBloc } from './features/core/state';
import { LanguageBloc } from './features/languages/presentation/bloc/LanguageBloc';
import { LanguageEventFetchAll } from './features/languages/presentation/bloc/LanguageEvent';
import { NotifyChangeBloc } from './features/languages/presentation/bloc/NotifyChangeBloc';

interface LanguageProps {
  children: React.ReactElement | Array<React.ReactElement>;
}
const Language: React.FC<LanguageProps> = ({
  children,
}: LanguageProps): React.ReactElement => {
  const [, bloc] = useBloc(LanguageBloc);
  const [...notifyHook] = useBloc(NotifyChangeBloc);

  React.useEffect(() => {
    const notifyBloc = notifyHook[1];
    notifyBloc.initState();
    return () => {
      notifyBloc.dispose();
    };
  }, []);
  React.useEffect(() => {
    bloc.add(new LanguageEventFetchAll());
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export { Language };

export type { LanguageProps };

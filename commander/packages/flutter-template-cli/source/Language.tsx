import React from 'react';
import { useBloc } from './features/core/state';
import { LanguageBloc } from './features/languages/presentation/bloc/LanguageBloc';
import { LanguageEventFetchAll } from './features/languages/presentation/bloc/LanguageEvent';

interface LanguageProps {
  children: React.ReactElement | Array<React.ReactElement>;
}
const Language: React.FC<LanguageProps> = ({
  children,
}: LanguageProps): React.ReactElement => {
  const [_, bloc] = useBloc(LanguageBloc);

  React.useEffect(() => {
    bloc.add(new LanguageEventFetchAll());
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export { Language };

export type { LanguageProps };

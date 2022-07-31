import React from 'react';
import './services/i18n';
import { Language } from './Language';
import { MainRouter } from './router/presentation/MainRouter';

const App = (): React.ReactElement => {
  return (
    <Language>
      <MainRouter />
    </Language>
  );
};
export { App };

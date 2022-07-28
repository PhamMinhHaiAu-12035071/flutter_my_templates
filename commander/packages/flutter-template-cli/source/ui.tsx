import React from 'react';
import './services/i18n';
import { Language } from './Language';
import { Router } from './router/Router';

const App = (): React.ReactElement => {
  return (
    <Language>
      <Router />
    </Language>
  );
};
export { App };

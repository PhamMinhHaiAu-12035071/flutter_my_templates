import React from 'react';
import { InputPathContainer } from './components/InputPath/InputPathContainer';
import { store } from './stores';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <InputPathContainer />
  </Provider>
);

module.exports = App;
export default App;

import React from 'react';
import { InputPathContainer } from './components/InputPath/InputPathContainer';
import { store } from './stores';
import { Provider } from 'react-redux';
import { CreateFolderBinContainer } from './components/CreateFolderBin/CreateFolderBinContainer';
import { CopyFileZipContainer } from './components/CopyFlutterZip/CopyFileZipContainer';
import { ShowProgressTable } from './components/CopyFlutterZip/ShowProgressTable';

const App = () => (
  <Provider store={store}>
    <InputPathContainer />
    <CreateFolderBinContainer />
    <ShowProgressTable />
    <CopyFileZipContainer />
  </Provider>
);

module.exports = App;
export default App;

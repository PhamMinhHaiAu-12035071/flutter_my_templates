import React from 'react';
import { InputPathContainer } from './components/InputPath/InputPathContainer';
import { store } from './stores';
import { Provider } from 'react-redux';
import { CreateFolderBinContainer } from './components/CreateFolderBin/CreateFolderBinContainer';
import { CopyFileZipContainer } from './components/CopyFileZip/CopyFileZipContainer';
import { ShowProgressTable } from './components/CopyFileZip/ShowProgressTable';
import { UnzipContainer } from './components/Unzip/UnzipContainer';

const App = () => (
  <Provider store={store}>
    <InputPathContainer />
    <CreateFolderBinContainer />
    <ShowProgressTable />
    <CopyFileZipContainer />
    <UnzipContainer />
  </Provider>
);

module.exports = App;
export default App;

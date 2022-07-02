import React from 'react';
import { InputPathContainer } from './components/InputPath/InputPathContainer';
import { store } from './stores';
import { Provider } from 'react-redux';
import { CreateFolderBinContainer } from './components/CreateFolderBin/CreateFolderBinContainer';
import { CopyFileZipContainer } from './components/CopyFileZip/CopyFileZipContainer';
import { ShowProgressTable } from './components/CopyFileZip/ShowProgressTable';
import { UnzipContainer } from './components/Unzip/UnzipContainer';
import { ShowProgressUnzip } from './components/Unzip/ShowProgressUnzip';

const App = () => (
  <Provider store={store}>
    <InputPathContainer />
    <CreateFolderBinContainer />
    <ShowProgressTable />
    <CopyFileZipContainer />
    <ShowProgressUnzip />
    <UnzipContainer />
  </Provider>
);

module.exports = App;
export default App;

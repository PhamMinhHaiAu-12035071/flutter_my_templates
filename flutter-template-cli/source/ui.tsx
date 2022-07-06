import React from 'react';
import { InputPathContainer } from './components/InputPath/InputPathContainer';
import { store } from './stores';
import { Provider } from 'react-redux';
import { CreateFolderBinContainer } from './components/CreateFolderBin/CreateFolderBinContainer';
import { CopyFileZipContainer } from './components/CopyFileZip/CopyFileZipContainer';
import { ShowProgressTable } from './components/CopyFileZip/ShowProgressTable';
import { UnzipContainer } from './components/Unzip/UnzipContainer';
import { ShowProgressUnzip } from './components/Unzip/ShowProgressUnzip';
import { Image } from './components/atoms/Image/Image';

const App = () => {
  return (
    <Provider store={store}>
      <Image
        marginTop={5}
        marginLeft={5}
        path={'/Users/phamminhhaiau/Desktop/demo/download.png'}
        options={{
          width: '50%',
          height: '50%',
          preserveAspectRatio: true,
        }}
      />
      <InputPathContainer />
      <CreateFolderBinContainer />
      <ShowProgressTable />
      <CopyFileZipContainer />
      <ShowProgressUnzip />
      <UnzipContainer />
    </Provider>
  );
};

module.exports = App;
export default App;

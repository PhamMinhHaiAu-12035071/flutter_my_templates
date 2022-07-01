import { BoxRow } from '../BoxRow/BoxRow';
import { UnzipLoading } from './UnzipLoading';
import React from 'react';
import { ABSOLUTE_PATH_FOLDER_BIN, Status } from '../../constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUnzipStatus, setProgress } from '../../stores/reducers/unzipSlice';
import { selectCopyZipFlutterData } from '../../stores/reducers/copyZipSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores';
import { Worker } from 'worker_threads';

const util = require('util');

export const UnzipContainer = (): React.ReactElement | null => {
  const status = useAppSelector<Status>(selectUnzipStatus);
  const pathZip = useAppSelector<string>(selectCopyZipFlutterData);
  const dispatch = useDispatch<AppDispatch>();

  const _unzipFolder = (): void => {
    console.log('called _unzipFolder');
    const worker = new Worker('./source/services/worker_main.js', {
      workerData: {
        source: pathZip,
        destination: ABSOLUTE_PATH_FOLDER_BIN,
        path: './worker_demo.ts',
      },
    });

    worker.on('message', result => {
      console.log(`show result worker`);
      console.log(util.inspect(result, { showHidden: false, depth: null, colors: true }));
      const action = setProgress(result);
      dispatch(action);
    });
  };
  React.useMemo(() => {
    if (status === Status.LOADING) {
      _unzipFolder();
    }
  }, [status]);

  if (status === Status.LOADING) {
    return (
      <BoxRow>
        <UnzipLoading />
      </BoxRow>
    );
  }
  return null;
};

import { ABSOLUTE_PATH_FOLDER_BIN, SCRIPT_SHOW_ABSOLUTE_PATH, Status } from '../../constants';
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { BoxRow } from '../BoxRow/BoxRow';
import { CopyFileZipLoading } from './CopyFileZipLoading';
import { selectCopyZipFlutterStatus, setProgress } from '../../stores/reducers/copyZipSlice';
import { selectRelativePath } from '../../stores/reducers/pathSlice';
import { v4 as uuidv4 } from 'uuid';
import { RsyncProgressData, RsyncService } from '../../services';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores';

const execSync = require('child_process').execSync;

export const CopyFileZipContainer = () => {
  const status = useAppSelector<Status>(selectCopyZipFlutterStatus);
  const pathSource = useAppSelector<string>(selectRelativePath);
  const dispatch = useDispatch<AppDispatch>();

  const _copyFileZip = (): void => {
    const source = execSync(`${SCRIPT_SHOW_ABSOLUTE_PATH} ${pathSource}`).toString();
    const dest = ABSOLUTE_PATH_FOLDER_BIN + uuidv4() + '.zip';
    RsyncService.getInstance().copyFile(source, dest, {
      onDone: _onDone,
      onProgress: _onProgress,
      onError: _onError,
    });
  };
  const _onDone = (error: never, code: never, cmd: never): void => {
    console.log(`[_onDone] ${error} ${code} ${cmd}`);
  };
  const _onProgress = (data: RsyncProgressData | undefined): void => {
    if (data !== undefined) {
      const action = setProgress(data);
      dispatch(action);
    }
  };
  const _onError = (data: never): void => {
    console.log(`[_onError]: ${data}`);
  };

  React.useMemo(() => {
    if (status === Status.LOADING) {
      _copyFileZip();
    }
  }, [status]);
  if (status === Status.LOADING) {
    return (
      <BoxRow>
        <CopyFileZipLoading />
      </BoxRow>
    );
  }
  return null;
};

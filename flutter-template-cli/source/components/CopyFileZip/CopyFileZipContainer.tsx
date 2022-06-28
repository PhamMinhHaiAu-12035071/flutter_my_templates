import {
  ABSOLUTE_PATH_FOLDER_BIN,
  SCRIPT_SHOW_ABSOLUTE_PATH,
  Status,
  ZERO_DELAY,
} from '../../constants';
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { BoxRow } from '../BoxRow/BoxRow';
import { CopyFileZipLoading } from './CopyFileZipLoading';
import {
  selectCopyZipFlutterStatus,
  setCopyZipFlutterError,
  setCopyZipFlutterSuccess,
  setProgress,
} from '../../stores/reducers/copyZipSlice';
import { selectRelativePath } from '../../stores/reducers/pathSlice';
import { v4 as uuidv4 } from 'uuid';
import { ExtraInformation, RsyncProgressData, RsyncService } from '../../services';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores';
import { CopyFileZipSuccess } from './CopyFileZipSuccess';
import { CopyFileZipError } from './CopyFileZipError';
import { setUnzipLoading } from '../../stores/reducers/unzipSlice';

const execSync = require('child_process').execSync;

export const CopyFileZipContainer = (): React.ReactElement | null => {
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
  const _onDone = (error: never, code: never, cmd: never, extra?: ExtraInformation): void => {
    if (error === null && code === 0 && cmd !== '' && extra?.destination !== '') {
      const action = setCopyZipFlutterSuccess(extra?.destination as string);
      dispatch(action);
      setTimeout(() => {
        const actionUnzipLoading = setUnzipLoading();
        dispatch(actionUnzipLoading);
      }, ZERO_DELAY);
    } else {
      const action = setCopyZipFlutterError(error as string);
      dispatch(action);
    }
  };
  const _onProgress = (data: RsyncProgressData | undefined): void => {
    if (data !== undefined) {
      const action = setProgress(data);
      dispatch(action);
    }
  };
  const _onError = (data: never): void => {
    const action = setCopyZipFlutterError(data as string);
    dispatch(action);
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
  } else if (status === Status.SUCCESS) {
    return (
      <BoxRow>
        <CopyFileZipSuccess />
      </BoxRow>
    );
  } else if (status === Status.ERROR) {
    return (
      <BoxRow>
        <CopyFileZipError />
      </BoxRow>
    );
  }
  return null;
};

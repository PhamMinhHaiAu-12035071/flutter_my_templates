import { BoxRow } from '../BoxRow/BoxRow';
import { UnzipLoading } from './UnzipLoading';
import React from 'react';
import { ABSOLUTE_PATH_FOLDER_BIN, Status } from '../../constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectUnzipStatus,
  setError,
  setProgress,
  setSuccess,
} from '../../stores/reducers/unzipSlice';
import { selectCopyZipFlutterData } from '../../stores/reducers/copyZipSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores';
import { ProgressUnzipService } from '../../services/progress_unzip_service';
import { Progress } from 'progress-stream';
import { UnzipSuccess } from './UnzipSuccess';
import { UnzipError } from './UnzipError';

export const UnzipContainer = (): React.ReactElement | null => {
  const status = useAppSelector<Status>(selectUnzipStatus);
  const pathZip = useAppSelector<string>(selectCopyZipFlutterData);
  const dispatch = useDispatch<AppDispatch>();

  const _unzipFolder = (): void => {
    ProgressUnzipService.getInstance().unzipFile(pathZip, ABSOLUTE_PATH_FOLDER_BIN, {
      onProgress: _onProgress,
      onSuccess: _onSuccess,
      onError: _onError,
    });
  };

  const _onProgress = (progress: Progress): void => {
    const action = setProgress(progress);
    dispatch(action);
  };
  const _onSuccess = (): void => {
    const action = setSuccess();
    dispatch(action);
  };

  const _onError = (error: never): void => {
    const action = setError(error);
    dispatch(action);
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
  } else if (status === Status.SUCCESS) {
    return (
      <BoxRow>
        <UnzipSuccess />
      </BoxRow>
    );
  } else if (status === Status.ERROR) {
    return (
      <BoxRow>
        <UnzipError />
      </BoxRow>
    );
  }
  return null;
};

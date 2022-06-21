import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ABSOLUTE_PATH_FOLDER_BIN, Status, ZERO_DELAY } from '../../constants';
import {
  selectCreateFolderStatus,
  setCreateFolderExists,
  setCreateFolderSuccess,
  StatusFolder,
  StatusFolderCombine,
} from '../../stores/reducers/createFolderSlice';
import { CreateFolderLoading } from './CreateFolderLoading';
import { useDispatch } from 'react-redux';
import { CreateFolderSuccess } from './CreateFolderSuccess';
import { CreateFolderExists } from './CreateFolderExists';
import { BoxRow } from '../BoxRow/BoxRow';
import { AppDispatch } from '../../stores';
import { setCopyZipFlutterLoading } from '../../stores/reducers/copyZipSlice';

const fs = require('fs');

export const CreateFolderBinContainer = (): React.ReactElement | null => {
  const status = useAppSelector<StatusFolderCombine>(selectCreateFolderStatus);
  const dispatch = useDispatch<AppDispatch>();
  const _executeCreateFolder = (): void => {
    setTimeout(() => {
      if (fs.existsSync(ABSOLUTE_PATH_FOLDER_BIN)) {
        const action = setCreateFolderExists();
        dispatch(action);
      } else {
        fs.mkdirSync(ABSOLUTE_PATH_FOLDER_BIN);
        const action = setCreateFolderSuccess();
        dispatch(action);
      }
      const action = setCopyZipFlutterLoading();
      dispatch(action);
    }, ZERO_DELAY);
  };
  React.useMemo(() => {
    if (status === Status.LOADING) {
      _executeCreateFolder();
    }
  }, [status]);

  if (status === Status.LOADING) {
    return (
      <BoxRow>
        <CreateFolderLoading />
      </BoxRow>
    );
  } else if (status === Status.SUCCESS) {
    return (
      <BoxRow>
        <CreateFolderSuccess />
      </BoxRow>
    );
  } else if (status === StatusFolder.PATH_FOLDER_EXISTS) {
    return (
      <BoxRow>
        <CreateFolderExists />
      </BoxRow>
    );
  }
  return null;
};

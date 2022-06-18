import React from 'react';
import { checkPathFileExtension, v } from '../../utilities';
import { PATH_ZIP_EXTENSION, SCRIPT_CHECK_FILE_EXISTS, Status } from '../../constants';
import { ValidationError } from 'fastest-validator';
import { InputPath } from './InputPath';
import { useDispatch } from 'react-redux';
import {
  selectPathErrors,
  selectPathExecuteTimeSuccess,
  selectPathStatus,
  setPathFailed,
  setPathLoading,
  setPathSuccess,
  StatusPathCombine,
} from '../../stores/reducers/pathSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setCreateFolderLoading } from '../../stores/reducers/createFolderSlice';

const shell = require('shelljs');

/**
 * Define validator
 */
const schema: object = {
  path: {
    type: 'custom',
    check(value: string, errors: { type: string; actual: unknown; expected: unknown }[]): string {
      const result = shell.exec(`${SCRIPT_CHECK_FILE_EXISTS} ${value}`, { async: false }).code;
      const checkExtension = checkPathFileExtension(value, PATH_ZIP_EXTENSION);
      if (!checkExtension) {
        errors.push({
          actual: undefined,
          type: 'extensionNotSupported',
          expected: '(zip)',
        });
      }
      if (result === 1) {
        errors.push({
          actual: undefined,
          type: 'pathNotExists',
          expected: undefined,
        });
      }

      return value;
    },
  },
};
const check = v.compile(schema);

export const InputPathContainer = () => {
  const [path, setPath] = React.useState<string>('');
  const dispatch = useDispatch();
  const status = useAppSelector<StatusPathCombine>(selectPathStatus);
  const errors = useAppSelector<Array<ValidationError> | undefined>(selectPathErrors);
  const time = useAppSelector<string>(selectPathExecuteTimeSuccess);
  React.useMemo(() => {
    if (status === Status.ERROR) {
      setPath('');
    }
  }, [status]);
  const _handleClearText = (): void => {
    setPath('');
  };

  const _handlePathValid = (value: string) => {
    const action = setPathSuccess(value);
    dispatch(action);
    const actionLoading = setCreateFolderLoading();
    dispatch(actionLoading);
  };
  const _handlePathInvalid = (result: Array<ValidationError>) => {
    _handleClearText();
    const action = setPathFailed(result);
    dispatch(action);
  };
  const _onSubmit = async (value: string): Promise<void> => {
    dispatch(setPathLoading());
    const obj = {
      path: value,
    };
    const result = await check(obj, schema);
    if (result === true) {
      _handlePathValid(value);
    } else {
      _handlePathInvalid(result);
    }
  };

  const _onChange = (value: string): void => {
    if (status === Status.INITIAL || status === Status.ERROR) {
      setPath(value);
    }
    return;
  };
  return (
    <InputPath
      path={path}
      onChange={_onChange}
      onSubmit={_onSubmit}
      status={status}
      errors={errors}
      time={time}
    />
  );
};

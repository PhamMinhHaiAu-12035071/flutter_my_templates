import { BoxRow } from '../BoxRow/BoxRow';
import { UnzipLoading } from './UnzipLoading';
import React from 'react';
import { ABSOLUTE_PATH_FOLDER_BIN, Status } from '../../constants';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUnzipStatus } from '../../stores/reducers/unzipSlice';
import { selectCopyZipFlutterData } from '../../stores/reducers/copyZipSlice';
import unzipper from 'unzipper';
import * as fs from 'fs';
import progress from 'progress-stream';

export const UnzipContainer = (): React.ReactElement | null => {
  const status = useAppSelector<Status>(selectUnzipStatus);
  const pathZip = useAppSelector<string>(selectCopyZipFlutterData);
  const _unzipFolder = async (): Promise<void> => {
    const stat = fs.statSync(pathZip);
    const str = progress({
      length: stat.size,
      time: 100 /* ms */,
    });
    str.on('progress', function () {
      // console.log('show progress');
      // console.log(progress);
      /*
			{
					percentage: 9.05,
					transferred: 949624,
					length: 10485760,
					remaining: 9536136,
					eta: 42,
					runtime: 3,
					delta: 295396,
					speed: 949624
			}
			*/
    });

    fs.createReadStream(pathZip)
      .pipe(str)
      .pipe(unzipper.Extract({ path: ABSOLUTE_PATH_FOLDER_BIN, concurrency: 1 }))
      .promise()
      .then(
        () => console.log('done'),
        e => console.log('error', e)
      );
  };
  React.useMemo(() => {
    if (status === Status.LOADING) {
      _unzipFolder().then();
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

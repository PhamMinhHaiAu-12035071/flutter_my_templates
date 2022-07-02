import { useAppSelector } from '../../hooks/useAppSelector';
import { Progress } from 'progress-stream';
import { selectUnzipProgress } from '../../stores/reducers/unzipSlice';
import Table from 'ink-table';
import _ from 'lodash';
import React from 'react';
import moment from 'moment';

export const ShowProgressUnzip = (): React.ReactElement | null => {
  const progress = useAppSelector<Array<Progress>>(selectUnzipProgress);

  if (progress.length > 0) {
    return (
      <Table
        data={
          progress.map(item => {
            return {
              'Total Size': `${item.transferred} Bytes`,
              Progress: `${_.round(item.percentage)}%`,
              'Speed Up': `${_.round(item.speed * Math.pow(10, -6), 2)} MB/s`,
              'Estimate time': `${moment()
                .hour(0)
                .minute(0)
                .second(0)
                .add(item.eta, 'seconds')
                .format('HH:mm:ss')}`,
            };
          }) as Array<never>
        }
      />
    );
  }
  return null;
};

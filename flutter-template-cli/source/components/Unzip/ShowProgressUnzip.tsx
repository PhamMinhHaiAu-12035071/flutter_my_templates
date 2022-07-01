import { useAppSelector } from '../../hooks/useAppSelector';
import { Progress } from 'progress-stream';
import { selectUnzipProgress } from '../../stores/reducers/unzipSlice';
import Table from 'ink-table';
import _ from 'lodash';
import React from 'react';

export const ShowProgressUnzip = (): React.ReactElement | null => {
  const progress = useAppSelector<Array<Progress>>(selectUnzipProgress);

  if (progress.length > 0) {
    return (
      <Table
        data={
          progress.map(item => {
            return {
              Progress: `${_.round(item.percentage)}%`,
              'Total Size': `${item.transferred} Bytes`,
              'Speed Up': `${_.round(item.speed * Math.pow(10, -6), 2)} MB/s`,
              'Estimate time': 'Unknown',
            };
          }) as Array<never>
        }
      />
    );
  }
  return null;
};

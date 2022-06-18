import { RsyncProgressData } from '../../services';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectProgressCopyZipFlutter } from '../../stores/reducers/copyZipSlice';
import Table from 'ink-table';
import React from 'react';
import { BoxRow } from '../BoxRow/BoxRow';
import _ from 'lodash';

export const ShowProgressTable = () => {
  const progress = useAppSelector<Array<RsyncProgressData>>(
    selectProgressCopyZipFlutter
  ) as never[];

  if (progress.length > 0) {
    return (
      <BoxRow>
        <Table
          data={progress.map(item => {
            return _.merge(item, {
              Progress: item['Progress'] + '%',
              'Total Size': item['Total Size'] + 'Bytes',
            });
          })}
        />
      </BoxRow>
    );
  }
  return null;
};

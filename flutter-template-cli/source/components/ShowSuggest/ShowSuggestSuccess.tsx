import { useAppSelector } from '../../hooks/useAppSelector';
import {
  selectSuggestKeywordData,
  SuggestKeywordData,
} from '../../stores/reducers/suggestKeywordSlice';
import { Box, Text } from 'ink';
import React from 'react';
import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Text';
import _ from 'lodash';

const styledColumnItem: Styles = {
  flexDirection: 'column',
  marginLeft: 2,
};
const styledRowItem: Styles = {
  flexDirection: 'row',
};
const styledItemText: Props = {
  wrap: 'truncate',
};

const numberOfRows = 4;

export const ShowSuggestSuccess = (): React.ReactElement => {
  const data = useAppSelector<Array<SuggestKeywordData>>(selectSuggestKeywordData);
  return (
    <Box>
      {_.chain(data)
        .chunk(numberOfRows)
        .value()
        .map((row, index) => {
          return (
            <Box key={index.toString()} {...styledColumnItem}>
              {row.map((item, index) => {
                return (
                  <Box key={index.toString()} {...styledRowItem}>
                    <Text {...styledItemText}>✔ {item.name} </Text>
                  </Box>
                );
              })}
            </Box>
          );
        })}
    </Box>
  );
};

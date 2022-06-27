import React from 'react';
import { Box, Newline, Text } from 'ink';
import { Styles } from 'ink/build/styles';
import { Colors } from '../../constants';
import { BoxRow } from '../BoxRow/BoxRow';
import { ShowSuggestLoading } from './ShowSuggestLoading';
import { ShowSuggestSuccess } from './ShowSuggestSuccess';
import { Props } from 'ink/build/components/Text';
import {
  StatusSuggestKeywordCombine,
  SuggestKeywordData,
  SuggestKeywordStatus,
} from '../../stores/reducers/suggestKeywordSlice';
import { ShowSuggestEmpty } from './ShowSuggestEmpty';

const styledWrapperTitleSuggest: Styles = {
  paddingLeft: 2,
};
const styledTitleSuggest: Props = {
  color: Colors.SYSTEM_GRAY_2,
};
interface ShowSuggestProps {
  status: StatusSuggestKeywordCombine;
  data: Array<SuggestKeywordData>;
}
export const ShowSuggest = (props: ShowSuggestProps): React.ReactElement => {
  return (
    <>
      <Box {...styledWrapperTitleSuggest}>
        <Text {...styledTitleSuggest}>
          Press 'Tab' to show suggest folder or file zip
          <Newline />
          <Text>Press 'Tab' again to move</Text>
          <Newline />
          <Text>Press 'Enter' to choose</Text>
        </Text>
      </Box>
      {props.status === StatusSuggestKeywordCombine.LOADING && (
        <BoxRow>
          <ShowSuggestLoading />
        </BoxRow>
      )}
      {(props.status === StatusSuggestKeywordCombine.SUCCESS ||
        props.status === StatusSuggestKeywordCombine.CHOOSE_TAB) && (
        <BoxRow>
          <ShowSuggestSuccess data={props.data} />
        </BoxRow>
      )}
      {props.status === SuggestKeywordStatus.EMPTY_DATA && (
        <BoxRow>
          <ShowSuggestEmpty />
        </BoxRow>
      )}
    </>
  );
};

import { Box, Text } from 'ink';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import { Colors, fileSpinner, folderSpinner, SPACE_CHARACTER, TYPE_FILE } from '../../constants';
import React from 'react';
import { SuggestKeywordData } from '../../stores/reducers/suggestKeywordSlice';
import { Props } from 'ink/build/components/Text';
import { Spinner } from 'cli-spinners';

const styledItemTextNormal: Props = {
  wrap: 'truncate',
};
const styledItemTextActive: Props = {
  wrap: 'truncate',
  backgroundColor: Colors.SYSTEM_GREEN,
};

type ItemShowSuggestSuccessProps = SuggestKeywordData;
export const ItemShowSuggestSuccess = (props: ItemShowSuggestSuccessProps) => {
  const itemType: Spinner = props.type === TYPE_FILE.FOLDER ? folderSpinner : fileSpinner;
  const styledText = props.isActive ? styledItemTextActive : styledItemTextNormal;
  return (
    <Box>
      <CustomSpinner
        spinner={itemType}
        arrText={[<Text {...styledText}>{SPACE_CHARACTER + props.name + SPACE_CHARACTER}</Text>]}
      />
    </Box>
  );
};

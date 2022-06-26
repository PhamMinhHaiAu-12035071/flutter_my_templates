import { SuggestKeywordData } from '../../stores/reducers/suggestKeywordSlice';
import { Box } from 'ink';
import React from 'react';
import { Styles } from 'ink/build/styles';
import _ from 'lodash';
import { ItemShowSuggestSuccess } from './ItemShowSuggestSuccess';

const styledColumnItem: Styles = {
  flexDirection: 'column',
  marginLeft: 2,
};
const styledMarginTop: Styles = {
  marginTop: 1,
};
const styledRowItem: Styles = {
  flexDirection: 'row',
};

const numberOfColumns = 2;

interface ShowSuggestSuccessProps {
  data: Array<SuggestKeywordData>;
}
export const ShowSuggestSuccess = (props: ShowSuggestSuccessProps): React.ReactElement => {
  const [arr, setArr] = React.useState<Array<Array<SuggestKeywordData>>>([]);
  React.useEffect(() => {
    if (props.data.length > 0) {
      const numberOfRows = Math.ceil(props.data.length / numberOfColumns);
      const newArr = _.chain(props.data).chunk(numberOfRows).value();
      setArr(newArr);
    }
  }, [props]);
  return (
    <>
      {arr.map((row, index) => {
        return (
          <Box key={index.toString()} {...styledColumnItem}>
            {row.map((item, index) => {
              const marginTop = index !== 0 ? styledMarginTop : {};
              const styledContainer = { ...styledRowItem, ...marginTop };
              return (
                <Box {...styledContainer} key={item.id}>
                  <ItemShowSuggestSuccess {...item} />
                </Box>
              );
            })}
          </Box>
        );
      })}
    </>
  );
};

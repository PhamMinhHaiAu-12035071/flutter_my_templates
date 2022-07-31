import React from 'react';
import { Box } from 'ink';
import { styles } from './styles';
import { ListLanguage } from '../../components/ListLanguage/ListLanguage';
import {
  LanguageState,
  LanguageStateChangedSuccess,
  LanguageStateFocusChanged,
  LanguageStateLoaded,
} from '../../bloc/LanguageState';
import { LanguageControl } from '../../components/LanguageControl/LanguageControl';

interface LanguageScreenViewProps {
  readonly state: LanguageState;
}
const LanguageScreenView: React.FC<LanguageScreenViewProps> = (
  props: LanguageScreenViewProps,
): React.ReactElement => {
  return (
    <Box {...styles.container}>
      {[
        LanguageStateLoaded,
        LanguageStateFocusChanged,
        LanguageStateChangedSuccess,
      ].some((item) => props.state instanceof item) && (
        <ListLanguage list={props.state.items} />
      )}
      <LanguageControl />
    </Box>
  );
};

export { LanguageScreenView };

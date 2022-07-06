import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { ValidationError } from 'fastest-validator';
import React from 'react';
import { Styles } from 'ink/build/styles';
import { checkedSpinner, Colors, SPACE_CHARACTER } from '../../constants';
import _ from 'lodash';
import { StatusPathCombine } from '../../stores/reducers/pathSlice';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import Spinner from 'ink-spinner';
import { BoxRow } from '../BoxRow/BoxRow';
import { ShowSuggestContainer } from '../ShowSuggest/ShowSuggestContainer';
import { Props } from 'ink/build/components/Text';

/**
 * Define styles
 */
const styledContainer: Styles = {
  borderStyle: 'round',
  borderColor: Colors.SYSTEM_TEAL,
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 1,
  paddingBottom: 1,
};
const styledTitle: Styles = {
  marginRight: 1,
};

const styledTextError: Props = {
  color: Colors.SYSTEM_RED,
};

const styledMx: Styles = {
  marginLeft: 2,
};

interface InputPathProps {
  path: string;
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
  status: StatusPathCombine;
  errors: Array<ValidationError> | undefined;
  time: string;
}

const title = 'Enter your path zip of flutter:';

export const InputPath = (props: InputPathProps): React.ReactElement => {
  return (
    <>
      <Box {...styledContainer}>
        <Box {...styledTitle}>
          <Text>{title}</Text>
        </Box>
        {props.status !== StatusPathCombine.AUTOCOMPLETE && (
          <TextInput
            highlightPastedText={true}
            value={props.path}
            placeholder={'Enter your path zip of flutter'}
            onSubmit={props.onSubmit}
            onChange={props.onChange}
            showCursor={props.status !== StatusPathCombine.SUCCESS}
          />
        )}
        {props.status === StatusPathCombine.AUTOCOMPLETE && <Text>{props.path}</Text>}
      </Box>
      <ShowSuggestContainer path={props.path} status={props.status} />
      {/* Handle loading and success */}
      <RenderSpinner status={props.status} time={props.time} />
      {/* Handle error */}
      {!_.isEmpty(props.errors) &&
        props.status === StatusPathCombine.ERROR &&
        props.path.length === 0 &&
        props.errors?.map((error: ValidationError, index: number) => {
          return (
            <BoxRow key={index.toString()} {...styledMx}>
              <Text {...styledTextError}>{error.message}</Text>
            </BoxRow>
          );
        })}
      {/* Handle error key press */}
      {!_.isEmpty(props.errors) &&
        props.status === StatusPathCombine.ERROR_KEYDOWN &&
        props.errors?.map((error: ValidationError, index: number) => {
          return (
            <BoxRow key={index.toString()} {...styledMx}>
              <Text {...styledTextError}>{error.message}</Text>
            </BoxRow>
          );
        })}
    </>
  );
};

interface RenderSpinnerProps {
  status: StatusPathCombine;
  time: string;
}

const styledTextWarning: Props = {
  color: Colors.SYSTEM_YELLOW,
};
const styledTextSuccess: Props = {
  color: Colors.SYSTEM_GREEN,
};
const styledTime: Props = {
  color: Colors.SYSTEM_GRAY,
};
const RenderSpinner = (props: RenderSpinnerProps): React.ReactElement | null => {
  if (props.status === StatusPathCombine.LOADING) {
    return (
      <BoxRow>
        <Text>
          <Text {...styledTextWarning}>
            <Spinner type="dots" />
          </Text>
          <Text {...styledTextWarning}>
            {_.repeat(SPACE_CHARACTER, 2) + 'Recognize flutter path...'}
          </Text>
        </Text>
      </BoxRow>
    );
  } else if (props.status === StatusPathCombine.SUCCESS && props.time !== '') {
    return (
      <BoxRow>
        <CustomSpinner
          spinner={checkedSpinner}
          colorSpinner={Colors.SYSTEM_GREEN}
          arrText={[
            <Text {...styledTextSuccess}>
              {SPACE_CHARACTER + 'Recognize flutter path success!' + _.repeat(SPACE_CHARACTER, 2)}
            </Text>,
            <Text {...styledTime}>({props.time})</Text>,
          ]}
        />
      </BoxRow>
    );
  }
  return null;
};

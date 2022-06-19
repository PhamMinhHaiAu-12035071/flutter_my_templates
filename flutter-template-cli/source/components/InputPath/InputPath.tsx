import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { ValidationError } from 'fastest-validator';
import React from 'react';
import { Styles } from 'ink/build/styles';
import { checkedSpinner, Colors, SPACE_CHARACTER, Status } from '../../constants';
import _ from 'lodash';
import { StatusPathCombine } from '../../stores/reducers/pathSlice';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import Spinner from 'ink-spinner';
import { BoxRow } from '../BoxRow/BoxRow';
import { ShowSuggest } from './ShowSuggest';

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

const styledTextError = {
  color: Colors.SYSTEM_RED,
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

export const InputPath = (props: InputPathProps) => {
  // console.log(`render input path ${JSON.stringify(props)}`);
  return (
    <>
      <Box {...styledContainer}>
        <Box {...styledTitle}>
          <Text>{title}</Text>
        </Box>
        <TextInput
          highlightPastedText={true}
          value={props.path}
          placeholder={'Enter your path zip of flutter'}
          onSubmit={props.onSubmit}
          onChange={props.onChange}
          showCursor={props.status === Status.INITIAL || props.status === Status.ERROR}
        />
      </Box>
      <ShowSuggest path={props.path} />
      {/* Handle loading and success */}
      <RenderSpinner status={props.status} time={props.time} />
      {/* Handle error */}
      {!_.isEmpty(props.errors) &&
        props.status === Status.ERROR &&
        props.path.length === 0 &&
        props.errors?.map((error: ValidationError, index: number) => {
          return (
            <BoxRow key={index.toString()}>
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

const RenderSpinner = (props: RenderSpinnerProps) => {
  if (props.status === Status.LOADING) {
    return (
      <BoxRow>
        <Text>
          <Text color={Colors.SYSTEM_YELLOW}>
            <Spinner type="dots" />
          </Text>
          <Text color={Colors.SYSTEM_YELLOW}>
            {_.repeat(SPACE_CHARACTER, 2) + 'Recognize flutter path...'}
          </Text>
        </Text>
      </BoxRow>
    );
  } else if (props.status === Status.SUCCESS && props.time !== '') {
    return (
      <BoxRow>
        <CustomSpinner
          spinner={checkedSpinner}
          colorSpinner={Colors.SYSTEM_GREEN}
          arrText={[
            <Text color={Colors.SYSTEM_GREEN}>
              {SPACE_CHARACTER + 'Recognize flutter path success!' + _.repeat(SPACE_CHARACTER, 2)}
            </Text>,
            <Text color={Colors.SYSTEM_GRAY}>({props.time})</Text>,
          ]}
        />
      </BoxRow>
    );
  }
  return null;
};

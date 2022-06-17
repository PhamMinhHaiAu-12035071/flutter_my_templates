import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { ValidationError } from 'fastest-validator';
import React from 'react';
import { Styles } from 'ink/build/styles';
import { checkedSpinner, Colors, Status } from '../../constants';
import _ from 'lodash';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectPathErrors, StatusPathCombine } from '../../stores/reducers/pathSlice';
import { CustomSpinner } from '../CustomSpinner/CustomSpinner';
import Spinner from 'ink-spinner';

/**
 * Define styles
 */
const styledContainer: Styles = {
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
}

const title = 'Enter your path zip of flutter:';

export const InputPath = (props: InputPathProps) => {
  const errors = useAppSelector<Array<ValidationError> | undefined>(selectPathErrors);

  return (
    <>
      <Box borderStyle="classic">
        <Box {...styledContainer}>
          <Text>{title}</Text>
        </Box>
        <TextInput
          highlightPastedText={true}
          value={props.path}
          placeholder={'Enter your path zip of flutter'}
          onSubmit={props.onSubmit}
          onChange={props.onChange}
        />
      </Box>
      {/* Handle loading and success */}
      <RenderSpinner status={props.status} />
      {/* Handle error */}
      {!_.isEmpty(errors) &&
        errors?.map((error: ValidationError, index: number) => {
          return (
            <Box key={index.toString()}>
              <Text {...styledTextError}>{error.message}</Text>
            </Box>
          );
        })}
    </>
  );
};

interface RenderSpinnerProps {
  status: StatusPathCombine;
}

const RenderSpinner = (props: RenderSpinnerProps) => {
  const spaceCharacter = ' ';

  if (props.status === Status.LOADING) {
    return (
      <Text>
        <Text color={Colors.SYSTEM_YELLOW}>
          <Spinner type="dots" />
        </Text>
        <Text color={Colors.SYSTEM_YELLOW}>{spaceCharacter + 'Loading...'}</Text>
      </Text>
    );
  } else if (props.status === Status.SUCCESS) {
    return (
      <CustomSpinner
        spinner={checkedSpinner}
        colorSpinner={Colors.SYSTEM_GREEN}
        colorText={Colors.SYSTEM_GREEN}
        text={`${spaceCharacter + 'Recognize flutter path success!'}`}
      />
    );
  }
  return null;
};

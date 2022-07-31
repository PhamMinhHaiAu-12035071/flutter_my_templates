import React from 'react';
import { BackRouterUseCase } from '../../../router/domain/usecase/BackRouterUseCase';
import { useInput } from 'ink';
import { Container } from 'typedi';

interface BackWrapperProps {
  keyBack: string;
  children: React.ReactElement | Array<React.ReactElement>;
}
const BackWrapper: React.FC<BackWrapperProps> = (
  props: BackWrapperProps,
): React.ReactElement => {
  useInput((input) => {
    if (input === props.keyBack) {
      Container.get<BackRouterUseCase>(BackRouterUseCase).call();
    }
  });

  return <React.Fragment>{props.children}</React.Fragment>;
};

export { BackWrapper };

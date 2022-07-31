import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import { ListItemMenu } from '../../components/ListItemMenu/ListItemMenu';
import _ from 'lodash';
import { MenuState } from '../../bloc/MenuState';
import { useTranslation } from 'react-i18next';
import { ControlController } from '../../components/Control/Control.controller';
import { ExitApplication } from '../../../../../common/components/ExitApplication/ExitApplication';

interface MenuScreenViewProps {
  readonly state: MenuState;
}
const MenuScreenView: React.FC<MenuScreenViewProps> = (
  props: MenuScreenViewProps,
): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <ExitApplication keyExit={'q'}>
      <Box {...styles.container}>
        <Box {...styles.wrapperContent}>
          <Box {...styles.wrapperContent_Title}>
            <Text {...styles.wrapperContent_TextTitle}>
              {_.startCase(_.toLower(t('dashboard')))}
            </Text>
          </Box>
          <ListItemMenu list={props.state.items} />
        </Box>
        <ControlController />
      </Box>
    </ExitApplication>
  );
};

export { MenuScreenView };

import _ from 'lodash';
import { MenuItemModel } from '../../../infrastructure/models/MenuItemModel';
import React, { Dispatch, SetStateAction } from 'react';
import { Box, Newline, Spacer, Text } from 'ink';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { TextInput } from '@commander/ui-kit';

interface ControlViewProps {
  id: string | undefined;
  arr: Array<MenuItemModel>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}
const ControlView: React.FC<ControlViewProps> = (
  props: ControlViewProps,
): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <Box {...styles.wrapperControl}>
      <Text>
        <Text {...styles.wrapperControl_TextGuide}>
          {_.upperFirst(t('guide'))}
          {':'}
        </Text>
        <Newline count={2} />
        <Text>
          {_.template(t('enterSelection'))({
            arr: props.arr.map((item: MenuItemModel) => item.id).toString(),
          })}
          <Text {...styles.wrapperControl_TextEnter}> Enter</Text>:{' '}
          <TextInput value={props.query} onChange={props.setQuery} />
        </Text>
      </Text>

      <Spacer />
      <Text>
        {_.upperFirst(t('press'))}{' '}
        <Text {...styles.wrapperContent_TextQuit}>q</Text> {t('toQuit')}
      </Text>
    </Box>
  );
};

export { ControlView };

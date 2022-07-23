// @ts-nocheck

import React from 'react';
import { Box, Newline, Spacer, Text, useApp, useInput } from 'ink';
import 'reflect-metadata';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { PATH, RouterContext } from '../../../../../router/RouterContext';
import {
  LanguageEventFetchAll,
  LanguageEventMoveDown,
  LanguageEventMoveUp,
} from './bloc/LanguageEvent';
import {
  LanguageStateChanged,
  LanguageStateLoaded,
} from './bloc/LanguageState';
import { ListLanguage } from '../../components/ListLanguage/ListLanguage';
import { ItemLanguageProps } from '../../components/ItemLanguage/ItemLanguage';
import { useBloc } from '../../../../core/state';
import { LanguageBloc } from './bloc/LanguageBloc';

const LanguageScreen = (): React.ReactElement => {
  const [state, bloc] = useBloc<LanguageBloc>(LanguageBloc);

  React.useEffect(() => {
    bloc.add(new LanguageEventFetchAll());
  }, []);
  const { exit } = useApp();
  const router = React.useContext(RouterContext);
  const [arr, setArr] = React.useState<Array<ItemLanguageProps>>([]);
  const [count, setCount] = React.useState<number>(0);
  const { i18n, t } = useTranslation();

  // React.useEffect(() => {
  //   setArr(() => {
  //     return languages.map((item): ItemLanguageProps => {
  //       if (item.locale === i18n.language) {
  //         return {
  //           ...item,
  //           ...{
  //             isSelected: true,
  //           },
  //         };
  //       }
  //       return {
  //         ...item,
  //         ...{
  //           isSelected: false,
  //         },
  //       };
  //     });
  //   });
  // }, [i18n]);
  const resetCount = () => {
    setCount(0);
  };
  useInput((input, key) => {
    if (input === 'q') {
      exit();
    } else if (input === 'b') {
      router.changeScreen(PATH.MENU_SCREEN);
    }
    if (key.return) {
      const itemSelected = arr.find((item) => item.isSelected === true);
      if (itemSelected) {
        i18n['changeLanguage'](itemSelected.locale);
        setCount((_count) => _count + 1);
      }
    }
    if (key['upArrow'] || input === 'w') {
      bloc.add(new LanguageEventMoveUp());
    } else if (key['downArrow'] || input === 's') {
      bloc.add(new LanguageEventMoveDown());
    }
  });

  return (
    <Box {...styles.container}>
      {[LanguageStateLoaded, LanguageStateChanged].some(
        (item) => state instanceof item,
      ) && (
        <ListLanguage arr={state.items} count={count} resetCount={resetCount} />
      )}
      <Box {...styles.wrapperControl}>
        <Text>
          <Text {...styles.wrapperControl_TextGuide}>
            {_.upperFirst(t('guide'))}
            {':'}
          </Text>
          <Newline count={2} />
          <Text>
            {t('guideArrowKey')}{' '}
            <Text {...styles.wrapperControl_TextGreen}>Enter.</Text>
          </Text>
        </Text>
        <Text>
          {_.upperFirst(t('press'))}{' '}
          <Text {...styles.wrapperControl_TextGreen}>b</Text> {t('toBack')}
        </Text>
        <Spacer />
        <Text>
          {_.upperFirst(t('press'))}{' '}
          <Text {...styles.wrapperControl_TextQuit}>q</Text> {t('toQuit')}
        </Text>
        <Spacer />
      </Box>
    </Box>
  );
};

export { LanguageScreen };

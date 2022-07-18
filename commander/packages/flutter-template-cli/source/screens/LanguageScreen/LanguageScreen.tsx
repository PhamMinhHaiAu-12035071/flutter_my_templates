import React from 'react';
import { Box, Spacer, Text, useApp, useInput, Newline } from 'ink';
import { styles } from './styles';
import { ListLanguage } from './components/ListLanguage/ListLanguage';
import { PATH, RouterContext } from '../../router/RouterContext';
import { languages } from '../../constants/language';
import { ItemLanguageProps } from './components/ItemLanguage/ItemLanguage';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const LanguageScreen = (): React.ReactElement => {
  const { exit } = useApp();
  const router = React.useContext(RouterContext);
  const [arr, setArr] = React.useState<Array<ItemLanguageProps>>([]);
  const [count, setCount] = React.useState<number>(0);
  const { i18n, t } = useTranslation();
	React.useEffect(() => {
		setArr(() => {
			return languages.map(
				(item): ItemLanguageProps => {
					if (item.locale === i18n.language) {
						return {
							...item,
							...{
								isSelected: true,
							},
						};
					}
					return {
						...item,
						...{
							isSelected: false,
						},
					};
				},
			)
		})
	}, [i18n]);
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
        i18n.changeLanguage(itemSelected.locale);
        setCount((count) => count + 1);
      }
    }
    if (key['upArrow'] || input === 'w') {
      const findIndex = arr.findIndex((item) => item.isSelected === true);
      if (findIndex === 0) {
        setArr((prevState) => {
          return prevState.map((item, index): ItemLanguageProps => {
            if (index === arr.length - 1) {
              return {
                ...item,
                ...{
                  isSelected: true,
                },
              };
            }
            return {
              ...item,
              ...{
                isSelected: false,
              },
            };
          });
        });
      } else if (findIndex > 0) {
        setArr((prevState) => {
          return prevState.map((item, index): ItemLanguageProps => {
            if (index === findIndex - 1) {
              return {
                ...item,
                ...{
                  isSelected: true,
                },
              };
            }
            return {
              ...item,
              ...{
                isSelected: false,
              },
            };
          });
        });
      }
    } else if (key['downArrow'] || input === 's') {
      const findIndex = arr.findIndex((item) => item.isSelected === true);
      if (findIndex === arr.length - 1) {
        setArr((prevState) => {
          return prevState.map((item, index): ItemLanguageProps => {
            if (index === 0) {
              return {
                ...item,
                ...{
                  isSelected: true,
                },
              };
            }
            return {
              ...item,
              ...{
                isSelected: false,
              },
            };
          });
        });
      } else if (findIndex >= 0) {
        setArr((prevState) => {
          return prevState.map((item, index): ItemLanguageProps => {
            if (index === findIndex + 1) {
              return {
                ...item,
                ...{
                  isSelected: true,
                },
              };
            }
            return {
              ...item,
              ...{
                isSelected: false,
              },
            };
          });
        });
      }
    }
  });

  return (
    <Box {...styles.container}>
      <ListLanguage arr={arr} count={count} resetCount={resetCount} />
      <Box {...styles.wrapperControl}>
				<Text>
					<Text {...styles.wrapperControl_TextGuide}>{_.upperFirst(t('guide'))}{':'}</Text>
					<Newline count={2} />
					<Text>
						{t('guideArrowKey')}{' '}
						<Text {...styles.wrapperControl_TextGreen}>Enter.</Text>
					</Text>
				</Text>
				<Text>
					{_.upperFirst(t('press'))}{' '}<Text {...styles.wrapperControl_TextGreen}>b</Text>{' '}{t('toBack')}
				</Text>
				<Spacer />
				<Text>
					{_.upperFirst(t('press'))}{' '}<Text {...styles.wrapperControl_TextQuit}>q</Text>{' '}{t('toQuit')}
				</Text>
				<Spacer />
      </Box>
    </Box>
  );
};

export { LanguageScreen };

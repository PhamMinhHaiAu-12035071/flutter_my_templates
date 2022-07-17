import React from 'react';
import { Box, Spacer, Text, useApp, useInput } from 'ink';
import { styles } from './styles';
import { ListLanguage } from './components/ListLanguage/ListLanguage';
import { PATH, RouterContext } from '../../router/RouterContext';
import { languages } from '../../constants/language';
import { ItemLanguageProps } from './components/ItemLanguage/ItemLanguage';

const arrLanguages: Array<ItemLanguageProps> = languages.map(
  (item, index): ItemLanguageProps => {
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
  },
);
const LanguageScreen = (): React.ReactElement => {
  const { exit } = useApp();
  const router = React.useContext(RouterContext);
  const [arr, setArr] = React.useState<Array<ItemLanguageProps>>(arrLanguages);

  useInput((input, key) => {
    if (input === 'q') {
      exit();
    } else if (input === 'b' || key.return) {
      router.changeScreen(PATH.MENU_SCREEN);
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
      <ListLanguage arr={arr} />
      <Box {...styles.wrapperControl}>
        <Text>
          Use the arrow keys or WSAD to move the settings and Press{' '}
          <Text {...styles.wrapperControl_TextGreen}>Enter</Text>
        </Text>
        <Text>
          Press <Text {...styles.wrapperControl_TextGreen}>b</Text> to Back
        </Text>
        <Spacer />
        <Text>
          Press <Text {...styles.wrapperControl_TextQuit}>q</Text> to Quit
        </Text>
        <Spacer />
      </Box>
    </Box>
  );
};

export { LanguageScreen };

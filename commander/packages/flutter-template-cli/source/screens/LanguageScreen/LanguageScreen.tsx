import React from 'react';
import { Box, Spacer, Text, useApp, useInput } from 'ink';
import { styles } from './styles';
import { ListLanguage } from './components/ListLanguage/ListLanguage';
import { PATH, RouterContext } from '../../router/RouterContext';
import { languages } from '../../constants/language';

const LanguageScreen = (): React.ReactElement => {
	const { exit } = useApp();
	const router = React.useContext(RouterContext);
	const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

	useInput((input, key) => {

		if (input === 'q') {
			exit();
		} else if (input === 'b' || key.return) {
			router.changeScreen(PATH.MENU_SCREEN);
		}
		if (key['upArrow'] || input === 'w') {
			if (selectedIndex === 0) {
				setSelectedIndex(languages.length - 1);
			} else if (selectedIndex > 0) {
				setSelectedIndex(selectedIndex - 1);
			}
		} else if (key['downArrow'] || input === 's') {
			if (selectedIndex === languages.length - 1) {
				setSelectedIndex(0);
			} else if (selectedIndex >= 0) {
				setSelectedIndex(selectedIndex + 1);
			}
		}
	});


	return (
		<Box {...styles.container}>
			<ListLanguage arr={languages} selectedIndex={selectedIndex} />
			<Box {...styles.wrapperControl}>
				<Text>Use the arrow keys or WSAD to move the settings and
					Press <Text {...styles.wrapperControl_TextGreen}>Enter</Text></Text>
				<Text>Press <Text {...styles.wrapperControl_TextGreen}>b</Text> to Back</Text>
				<Spacer />
				<Text>Press <Text {...styles.wrapperControl_TextQuit}>q</Text> to Quit</Text>
				<Spacer />
			</Box>
		</Box>
	);
};

export { LanguageScreen };

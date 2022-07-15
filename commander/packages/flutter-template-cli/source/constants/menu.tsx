import {ItemMenuProps} from "../screens/MenuScreen/components/ItemMenu/ItemMenu";
import {PATH} from "../router/router-context";

const menus: Array<ItemMenuProps> = [
	{
		id: '1',
		name: 'Settings',
		screen: PATH.MENU_SCREEN,
	},
	{
		id: '2',
		name: 'Create template flutter_bloc_navigator_2',
		screen: PATH.TOOL_GENERATE_SCREEN,
	}
];

export {
	menus,
}

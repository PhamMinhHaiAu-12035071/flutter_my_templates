import { ItemMenuProps } from '../features/menu/components/ItemMenu/ItemMenu';
import { PATH } from '../router/RouterContext';

const menus: Array<ItemMenuProps> = [
  {
    id: '1',
    name: 'language',
    screen: PATH.LANGUAGE_SCREEN,
  },
  {
    id: '2',
    name: 'createTemplateFlutterBlocNavigator2',
    screen: PATH.TOOL_GENERATE_SCREEN,
  },
];

export { menus };

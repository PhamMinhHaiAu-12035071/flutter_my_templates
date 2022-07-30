import { Box } from 'ink';
import React from 'react';
import { ItemMenu } from '../ItemMenu/ItemMenu';
import { MenuItemModel } from '../../../infrastructure/models/MenuItemModel';

interface ListItemMenuProps {
  arr: Array<MenuItemModel>;
}

const ListItemMenu: React.FC<ListItemMenuProps> = (
  props: ListItemMenuProps,
): React.ReactElement => {
  return (
    <React.Fragment>
      {props.arr.map((item: MenuItemModel) => {
        return (
          <React.Fragment key={item.id}>
            <ItemMenu item={item} />
            <Box height={1} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
// const [selected, setSelected] = React.useState<number>(-1);
// const router = React.useContext(RouterContext);
// const { exit } = useApp();
// useInput((input, key) => {
//   if (input === 'q') {
//     exit();
//   }
//   if (key.return === true && selected !== -1) {
//     const itemSelected = props.arr ? props.arr[selected] : undefined;
//     if (itemSelected) {
//       router.changeScreen(itemSelected.screen);
//     }
//   }
//   if (props.arr && props.arr.length > 0) {
//     const findIndex = props.arr.findIndex((item) => item.id === input);
//     setSelected(findIndex);
//   }
// });
//
// return <ListItemMenuView {...props} selected={selected} />;

// interface ListItemMenuViewProps {
//   arr?: Array<ItemMenuProps>;
//   selected: number;
// }
//
// const ListItemMenuView = ({
//   arr = [],
//   selected,
// }: ListItemMenuViewProps): React.ReactElement | null => {
//   const { t } = useTranslation();
//
//   if (!arr || arr.length === 0) {
//     return null;
//   }
//   const itemSelected = arr[selected];
//
//   const renderTextSelection =
//     selected !== -1 && itemSelected
//       ? `${itemSelected.id}${chalk.inverse(' ')}`
//       : '';
//
//   return (
//     <Box {...styles.container}>
//       <Box {...styles.wrapperContent}>
//         <Box {...styles.wrapperContent_Title}>
//           <Text {...styles.wrapperContent_TextTitle}>
//             {_.startCase(_.toLower(t('dashboard')))}
//           </Text>
//         </Box>
//         {arr.map((item) => {
//           return (
//             <React.Fragment key={item.id}>
//               <ItemMenu {...item} />
//               <Box height={1} />
//             </React.Fragment>
//           );
//         })}
//       </Box>
//       <Box {...styles.wrapperControl}>
//         <Text>
//           <Text {...styles.wrapperControl_TextGuide}>
//             {_.upperFirst(t('guide'))}
//             {':'}
//           </Text>
//           <Newline count={2} />
//           <Text>
//             {_.template(t('enterSelection'))({
//               arr: arr.map((item) => item.id).toString(),
//             })}
//             <Text {...styles.wrapperControl_TextEnter}> Enter</Text>:{' '}
//             {renderTextSelection}
//           </Text>
//         </Text>
//
//         <Spacer />
//         <Text>
//           {_.upperFirst(t('press'))}{' '}
//           <Text {...styles.wrapperContent_TextQuit}>q</Text> {t('toQuit')}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

export { ListItemMenu };

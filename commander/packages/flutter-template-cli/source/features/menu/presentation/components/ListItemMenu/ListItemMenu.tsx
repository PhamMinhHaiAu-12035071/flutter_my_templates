import { Box } from 'ink';
import React from 'react';
import { ItemMenu } from '../ItemMenu/ItemMenu';
import { MenuItemModel } from '../../../infrastructure/models/MenuItemModel';
import { ListMenuItemModel } from '../../../infrastructure/models/ListMenuItemModel';

interface ListItemMenuProps {
  list: ListMenuItemModel;
}

const ListItemMenu: React.FC<ListItemMenuProps> = (
  props: ListItemMenuProps,
): React.ReactElement => {
  return (
    <React.Fragment>
      {props.list.arr.map((item: MenuItemModel) => {
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
export { ListItemMenu };

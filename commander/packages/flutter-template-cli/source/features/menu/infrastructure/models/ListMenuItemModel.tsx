import { MenuItemModel } from './MenuItemModel';

class ListMenuItemModel {
  private _arr!: Array<MenuItemModel>;

  constructor(arr: Array<MenuItemModel>);
  constructor(arr: Array<MenuItemModel>, selectedId: string | undefined);
  constructor(...myArray: Array<any>) {
    if (myArray.length === 1) {
      const [arr] = myArray;
      this._initialWithOneParameter(arr);
    } else if (myArray.length === 2) {
      const [arr, selectedId] = myArray;
      this._initialWithTwoParameter(arr, selectedId);
    }
  }

  private _handleArrWithSelectedIndex(
    arr: Array<MenuItemModel>,
    selectedIndex: number,
  ): void {
    this._arr = arr.map((item: MenuItemModel, index: number): MenuItemModel => {
      if (index === selectedIndex) {
        return new MenuItemModel(item.id, item.name, true);
      }
      return new MenuItemModel(item.id, item.name, false);
    });
  }

  private _initialWithOneParameter(arr: Array<MenuItemModel>): void {
    const findIndex = arr.findIndex((item: MenuItemModel) => item.isSelected);
    this._handleArrWithSelectedIndex(arr, findIndex);
  }

  private _initialWithTwoParameter(
    arr: Array<MenuItemModel>,
    selectedId: string,
  ): void {
    const findIndex = arr.findIndex(
      (item: MenuItemModel) => item.id === selectedId,
    );
    this._handleArrWithSelectedIndex(arr, findIndex);
  }

  get arr(): Array<MenuItemModel> {
    return this._arr;
  }

  get size(): number {
    return this._arr.length;
  }

  get selectedIndex(): number {
    return this._arr.findIndex((item) => item.isSelected);
  }
}

export { ListMenuItemModel };

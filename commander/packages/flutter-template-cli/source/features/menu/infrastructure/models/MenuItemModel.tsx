import { MenuItemEntity } from '../../domain/entities/MenuItemEntity';

class MenuItemModel extends MenuItemEntity {
  private readonly _isSelected: boolean;

  constructor(id: string, name: string, isSelected?: boolean) {
    super(id, name);
    this._isSelected = isSelected ?? false;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }
}

export { MenuItemModel };

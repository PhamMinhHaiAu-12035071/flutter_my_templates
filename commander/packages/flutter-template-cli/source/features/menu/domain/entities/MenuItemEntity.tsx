import { Entity } from '../../../core/domain/entities/entity';

type MenuItemID = string;

class MenuItemEntity implements Entity {
  private readonly _id: MenuItemID;
  private readonly _name: string;

  constructor(id: MenuItemID, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get itemId(): string {
    return this.id;
  }
}

export { MenuItemEntity };

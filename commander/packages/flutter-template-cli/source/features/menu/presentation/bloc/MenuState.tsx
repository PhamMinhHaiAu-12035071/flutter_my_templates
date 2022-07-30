import { ListMenuItemModel } from '../../infrastructure/models/ListMenuItemModel';
import { MenuItemModel } from '../../infrastructure/models/MenuItemModel';

class MenuState {
  readonly kind!: string;
  readonly items!: ListMenuItemModel;
  readonly id!: string | undefined;
}

class MenuStateInitial extends MenuState {
  override readonly kind: string;
  override readonly items: ListMenuItemModel;
  override readonly id: string | undefined;

  constructor() {
    super();
    this.kind = 'MenuStateInitial';
    this.items = new ListMenuItemModel([]);
    this.id = undefined;
  }
}

class MenuStateFetchAllLoaded extends MenuState {
  override readonly kind: string;
  override readonly items: ListMenuItemModel;
  override readonly id: string | undefined;

  constructor(arr: Array<MenuItemModel>) {
    super();
    this.kind = 'MenuStateFetchAllLoaded';
    this.items = new ListMenuItemModel(arr);
    this.id = undefined;
  }
}

class MenuStateFetchAllError extends MenuState {
  override readonly kind: string;
  override readonly items: ListMenuItemModel;
  override readonly id: string | undefined;
  readonly message: string;

  constructor(message: string) {
    super();
    this.kind = 'MenuStateFetchAllError';
    this.message = message;
    this.items = new ListMenuItemModel([]);
    this.id = undefined;
  }
}

class MenuStateChanging extends MenuState {
  override readonly kind: string;
  override readonly items: ListMenuItemModel;
  override readonly id: string;

  constructor(id: string, items: ListMenuItemModel) {
    super();
    this.kind = 'MenuStateChanging';
    this.id = id;
    this.items = new ListMenuItemModel(items.arr, id);
  }
}

class MenuStateChangingError extends MenuState {
  override readonly kind: string;
  override readonly items: ListMenuItemModel;
  override readonly id: string | undefined;

  constructor(items: ListMenuItemModel) {
    super();
    this.kind = 'MenuStateChangingError';
    this.id = undefined;
    this.items = new ListMenuItemModel(items.arr, this.id);
  }
}
class MenuStateConfirmChanged extends MenuState {
  override readonly kind: string;
  override readonly items: ListMenuItemModel;
  override readonly id: string | undefined;

  constructor(id: string, items: ListMenuItemModel) {
    super();
    this.kind = 'MenuStateConfirmChanged';
    this.id = id;
    this.items = new ListMenuItemModel(items.arr, id);
  }
}

class MenuStateLeaved extends MenuState {
  override readonly kind: string;
  override readonly items: ListMenuItemModel;
  override readonly id: string | undefined;

  constructor(id: string | undefined, items: ListMenuItemModel) {
    super();
    this.kind = 'MenuStateLeaved';
    this.id = id;
    this.items = new ListMenuItemModel(items.arr, id);
  }
}
const menuStateInitial: MenuState = new MenuStateInitial();

export {
  menuStateInitial,
  MenuState,
  MenuStateInitial,
  MenuStateFetchAllLoaded,
  MenuStateFetchAllError,
  MenuStateConfirmChanged,
  MenuStateChanging,
  MenuStateChangingError,
  MenuStateLeaved,
};

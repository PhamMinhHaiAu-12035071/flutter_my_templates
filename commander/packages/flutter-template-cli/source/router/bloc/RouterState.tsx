class RouterState {
  readonly kind!: string;
}

class RouterStateInitial extends RouterState {
  override readonly kind: string;

  constructor() {
    super();
    this.kind = 'RouterStateInitial';
  }
}

class RouterStateMenuScreen extends RouterState {
  override readonly kind: string;

  constructor() {
    super();
    this.kind = 'RouterStateMenuScreen';
  }
}
class RouterStateLanguageScreen extends RouterState {
  override readonly kind: string;

  constructor() {
    super();
    this.kind = 'RouterStateLanguageScreen';
  }
}

const routerStateInitial: RouterState = new RouterStateInitial();

export {
  RouterState,
  RouterStateInitial,
  RouterStateMenuScreen,
  routerStateInitial,
  RouterStateLanguageScreen,
};

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

const routerStateInitial: RouterState = new RouterStateInitial();

export { RouterState, RouterStateInitial, routerStateInitial };

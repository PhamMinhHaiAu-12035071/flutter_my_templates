import { LanguageStateInitial } from './LanguageState';

class NotifyChangeState {
  readonly kind!: string;
}

class NotifyChangeStateInitial extends NotifyChangeState {
  override readonly kind: string;

  constructor() {
    super();
    this.kind = 'NotifyChangeStateInitial';
  }
}
class NotifyChangeStateSuccess extends NotifyChangeState {
  override readonly kind: string;

  constructor() {
    super();
    this.kind = 'NotifyChangeStateSuccess';
  }
}

const notifyChangeStateInitial: NotifyChangeState = new LanguageStateInitial();

export {
  notifyChangeStateInitial,
  NotifyChangeState,
  NotifyChangeStateInitial,
  NotifyChangeStateSuccess,
};

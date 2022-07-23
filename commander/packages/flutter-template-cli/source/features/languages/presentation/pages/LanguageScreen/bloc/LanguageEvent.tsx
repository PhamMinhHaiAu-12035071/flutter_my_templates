class LanguageEvent {}

class LanguageEventFetchAll extends LanguageEvent {
  readonly kind: string;

  constructor() {
    super();
    this.kind = 'LanguageEventFetchAll';
  }
}

class LanguageEventMoveUp extends LanguageEvent {
  readonly kind: string;

  constructor() {
    super();
    this.kind = 'LanguageEventMoveUp';
  }
}

class LanguageEventMoveDown extends LanguageEvent {
  readonly kind: string;

  constructor() {
    super();
    this.kind = 'LanguageEventMoveDown';
  }
}
export {
  LanguageEvent,
  LanguageEventFetchAll,
  LanguageEventMoveUp,
  LanguageEventMoveDown,
};

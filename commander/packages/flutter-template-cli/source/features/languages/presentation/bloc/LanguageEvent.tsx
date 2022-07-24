class LanguageEvent {}

class LanguageEventFetchAll extends LanguageEvent {
  constructor() {
    super();
  }
}

class LanguageEventMoveUp extends LanguageEvent {
  constructor() {
    super();
  }
}

class LanguageEventMoveDown extends LanguageEvent {
  constructor() {
    super();
  }
}

class LanguageEventChanged extends LanguageEvent {
  constructor() {
    super();
  }
}

export {
  LanguageEvent,
  LanguageEventFetchAll,
  LanguageEventMoveUp,
  LanguageEventMoveDown,
  LanguageEventChanged,
};

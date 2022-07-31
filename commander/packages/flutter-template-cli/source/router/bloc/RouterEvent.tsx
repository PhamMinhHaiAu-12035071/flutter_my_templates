class RouterEvent {}

class RouterEventNavigateToMenuScreen extends RouterEvent {
  constructor() {
    super();
  }
}
class RouterEventNavigateToLanguageScreen extends RouterEvent {
  constructor() {
    super();
  }
}

class RouterEventBack extends RouterEvent {
  constructor() {
    super();
  }
}

export {
  RouterEvent,
  RouterEventNavigateToMenuScreen,
  RouterEventNavigateToLanguageScreen,
  RouterEventBack,
};

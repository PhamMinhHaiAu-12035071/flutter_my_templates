class NotifyChangeEvent {}

class NotifyChangeEventReset extends NotifyChangeEvent {
  constructor() {
    super();
  }
}

class NotifyChangeEventSuccess extends NotifyChangeEvent {
  constructor() {
    super();
  }
}

export { NotifyChangeEvent, NotifyChangeEventReset, NotifyChangeEventSuccess };

import { IsNotEmpty, IsNumberString } from 'class-validator';

class MenuEvent {}

class MenuEventFetchAll extends MenuEvent {
  constructor() {
    super();
  }
}

class MenuEventOnChange extends MenuEvent {
  @IsNotEmpty()
  @IsNumberString()
  public readonly input: string;

  constructor(input: string) {
    super();
    this.input = input;
  }
}

class MenuEventOnSubmit extends MenuEvent {
  constructor() {
    super();
  }
}

class MenuEventLeave extends MenuEvent {
  constructor() {
    super();
  }
}

export {
  MenuEvent,
  MenuEventFetchAll,
  MenuEventOnChange,
  MenuEventOnSubmit,
  MenuEventLeave,
};

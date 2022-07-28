import { IsNumberString } from 'class-validator';
import { Key } from 'ink/build/hooks/use-input';

class MenuEvent {}

class MenuEventFetchAll extends MenuEvent {
  constructor() {
    super();
  }
}

class MenuEventOnChange extends MenuEvent {
  @IsNumberString()
  public readonly input: string;

  public readonly key: Key;
  constructor(input: string, key: Key) {
    super();
    this.input = input;
    this.key = key;
  }
}

export { MenuEvent, MenuEventFetchAll, MenuEventOnChange };

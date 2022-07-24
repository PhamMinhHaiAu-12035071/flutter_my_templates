import { LanguageModel } from '../../infrastructure/models/LanguageModel';
import { ListLanguageModel } from '../../infrastructure/models/ListLanguageModel';

class LanguageState {
  readonly items!: ListLanguageModel;
  readonly kind!: string;
}

class LanguageStateInitial extends LanguageState {
  override readonly kind: string;
  override readonly items: ListLanguageModel;

  constructor() {
    super();
    this.kind = 'LanguageStateInitial';
    this.items = new ListLanguageModel([]);
  }
}

class LanguageStateLoaded extends LanguageState {
  override readonly kind: string;
  override readonly items: ListLanguageModel;

  constructor(arr: Array<LanguageModel>) {
    super();
    this.kind = 'LanguageStateLoaded';
    this.items = new ListLanguageModel(arr);
  }
}

class LanguageStateError extends LanguageState {
  override readonly kind: string;
  readonly message: string;

  constructor(message: string) {
    super();
    this.kind = 'LanguageStateError';
    this.message = message;
  }
}

class LanguageStateFocusChanged extends LanguageState {
  override readonly kind: string;
  override readonly items: ListLanguageModel;

  constructor(arr: Array<LanguageModel>) {
    super();
    this.kind = 'LanguageStateFocusChanged';
    this.items = new ListLanguageModel(arr);
  }
}

class LanguageStateChangedSuccess extends LanguageState {
  override readonly kind: string;
  override readonly items: ListLanguageModel;

  constructor(items: ListLanguageModel) {
    super();
    this.kind = 'LanguageStateChangedSuccess';
    this.items = items;
  }
}

const languageStateInitial: LanguageState = new LanguageStateInitial();

export {
  languageStateInitial,
  LanguageStateInitial,
  LanguageStateLoaded,
  LanguageStateError,
  LanguageStateFocusChanged,
  LanguageStateChangedSuccess,
};

export type { LanguageState };

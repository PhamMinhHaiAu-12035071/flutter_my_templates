import { LanguageModel } from '../../../../infrastructure/models/LanguageModel';
import _ from 'lodash';

class LanguageState {
  readonly kind!: string;
  readonly items!: Array<LanguageModel>;
}

class LanguageStateInitial extends LanguageState {
  override readonly kind: string;
  override readonly items: Array<LanguageModel>;

  constructor() {
    super();
    this.kind = 'LanguageStateInitial';
    this.items = [];
  }
}

class LanguageStateLoaded extends LanguageState {
  override readonly kind: string;
  override readonly items: Array<LanguageModel>;

  constructor(arr: Array<LanguageModel>) {
    super();
    this.kind = 'LanguageStateLoaded';
    let newArr = [...arr];
    if (newArr.length >= 1) {
      _.set(_.first(newArr)!, 'isSelected', true);
    }

    this.items = arr.map((item, index) => {
      if (index === 0) {
        return new LanguageModel(item.id, item.name, item.locale, true);
      }
      return item;
    });
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

class LanguageStateChanged extends LanguageState {
  override readonly kind: string;
  override readonly items: Array<LanguageModel>;

  constructor(arr: Array<LanguageModel>) {
    super();
    this.kind = 'LanguageStateChanged';
    this.items = arr;
  }
}

const languageStateInitial: LanguageState = new LanguageStateInitial();

export {
  languageStateInitial,
  LanguageStateInitial,
  LanguageStateLoaded,
  LanguageStateError,
  LanguageStateChanged,
};

export type { LanguageState };

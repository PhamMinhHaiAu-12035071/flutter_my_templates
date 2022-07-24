import { LanguageModel } from './LanguageModel';

class ListLanguageModel {
  private _arr!: Array<LanguageModel>;

  constructor(arr: Array<LanguageModel>);
  constructor(arr: Array<LanguageModel>, selectedIndex?: number);
  constructor(...myArray: Array<any>) {
    if (myArray.length === 1) {
      const [arr] = myArray;
      this._initialWithOneParameter(arr);
    } else if (myArray.length === 2) {
      const [arr, selectedIndex] = myArray;
      this._handleArrWithSelectedIndex(arr, selectedIndex);
    }
  }

  private _handleArrWithSelectedIndex(
    arr: Array<LanguageModel>,
    selectedIndex: number,
  ): void {
    this._arr = arr.map((item: LanguageModel, index: number): LanguageModel => {
      if (index === selectedIndex) {
        return new LanguageModel(item.id, item.name, item.locale, true);
      }
      return new LanguageModel(item.id, item.name, item.locale, false);
    });
  }

  private _initialWithOneParameter(arr: Array<LanguageModel>): void {
    const findIndex = arr.findIndex((item) => item.isSelected);
    const selectedIndex = findIndex !== -1 ? findIndex : 0;
    this._handleArrWithSelectedIndex(arr, selectedIndex);
  }

  get selectedIndex(): number {
    return this.arr.findIndex((item) => item.isSelected);
  }

  set selectedIndex(selectedIndex: number) {
    if (
      selectedIndex >= 0 &&
      selectedIndex < this.arr.length &&
      selectedIndex !== this.selectedIndex
    ) {
      this._handleArrWithSelectedIndex(this.arr, selectedIndex);
    }
  }

  get arr(): Array<LanguageModel> {
    return this._arr;
  }

  get size(): number {
    return this._arr.length;
  }

  get selectedElement(): LanguageModel | undefined {
    return this.arr[this.selectedIndex];
  }
}

export { ListLanguageModel };

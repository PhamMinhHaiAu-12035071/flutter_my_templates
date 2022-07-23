import { LanguageEntity, Locale } from '../../domain/entities/LanguageEntity';

class LanguageModel extends LanguageEntity {
  private readonly _isSelected: boolean;

  constructor(id: string, name: string, locale: Locale, isSelected?: boolean) {
    super(id, name, locale);
    this._isSelected = isSelected ?? false;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }
}

export { LanguageModel };

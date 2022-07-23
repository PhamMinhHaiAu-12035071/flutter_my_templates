import { Entity } from '../../../core/domain/entities/entity';

type LanguageID = string;

const enum Locale {
	en = 'en',
	vi = 'vi',
	jp = 'jp',
}

class LanguageEntity implements Entity {
	private readonly _id: LanguageID;
	private readonly _name: string;
	private readonly _locale: Locale;

	constructor(id: LanguageID, name: string, locale: Locale) {
		this._id = id;
		this._name = name;
		this._locale = locale;
	}

	get id(): string {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get locale(): Locale {
		return this._locale;
	}

	get itemId(): string {
		return this.id;
	}
}

export {
	LanguageEntity,
	Locale,
}

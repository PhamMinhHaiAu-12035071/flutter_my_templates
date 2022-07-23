import { LanguageEntity } from '../../../../domain/entities/LanguageEntity';

interface LanguageStateInitial {
	readonly kind: 'LanguageStateInitial';
	readonly languages: Array<LanguageEntity>;
}

interface LanguageStateLoaded {
	readonly kind: 'LanguageStateLoaded';
	readonly items: Array<LanguageEntity>;
}

type LanguageState = (LanguageStateInitial | LanguageStateLoaded);

const languageStateInitial: LanguageState = {
	kind: 'LanguageStateInitial',
	languages: [],
}

export type {
	LanguageStateInitial,
	LanguageStateLoaded,
	LanguageState,
}
export {
	languageStateInitial
}



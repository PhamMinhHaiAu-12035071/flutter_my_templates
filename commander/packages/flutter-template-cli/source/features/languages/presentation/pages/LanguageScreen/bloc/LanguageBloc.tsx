import { Bloc } from '@felangel/bloc';
import { LanguageEvent } from './LanguageEvent';
import { LanguageState, languageStateInitial, LanguageStateLoaded } from './LanguageState';

class LanguageBloc extends Bloc<LanguageEvent, LanguageState> {
	constructor() {
		super(languageStateInitial);
	}

	async* mapEventToState(event: LanguageEvent) {
		switch (event) {
			case LanguageEvent.GET_ALL_LANGUAGES:
				yield { kind: 'LanguageStateLoaded', items: [] } as LanguageStateLoaded;
				break;
		}
	}
}

export {
	LanguageBloc
};

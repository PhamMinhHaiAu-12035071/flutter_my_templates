import { LanguageMemoryDataProvider } from '../LanguageMemoryDataProvider';
import { GetAllLanguageException } from '../../../exceptions';
import { LanguageModel } from '../../models/LanguageModel';
import { Locale } from '../../../domain/entities/LanguageEntity';
import { either as E } from 'fp-ts';
import { Service } from 'typedi';
import Either = E.Either;

@Service()
class LanguageMemoryDataProviderImpl implements LanguageMemoryDataProvider {
	async getAll(): Promise<Either<GetAllLanguageException, Array<LanguageModel>>> {
		const languages: Array<LanguageModel> = [
			new LanguageModel('0', 'English', Locale.en),
			new LanguageModel('1', 'Vietnamese', Locale.vi),
			new LanguageModel('2', 'Japanese', Locale.jp),
		];
		return Promise.resolve(E.right(languages));
	}
}

export {
	LanguageMemoryDataProviderImpl,
}

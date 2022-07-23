import { LanguageRepository } from '../LanguageRepository';
import { LanguageEntity } from '../../../domain/entities/LanguageEntity';
import { AppException } from '../../../../core/exceptions/AppException';
import { either as E } from 'fp-ts';
import { LanguageMemoryDataProvider } from '../../data_sources/LanguageMemoryDataProvider';
import { Inject, Service } from 'typedi';
import Either = E.Either;
import { LanguageMemoryDataProviderImpl } from '../../data_sources/impl/LanguageMemoryDataProviderImpl';

@Service()
class LanguageRepositoryImpl implements LanguageRepository {
	languageMemoryDataProvider: LanguageMemoryDataProvider;

	constructor(@Inject() languageMemoryDataProvider: LanguageMemoryDataProviderImpl) {
		this.languageMemoryDataProvider = languageMemoryDataProvider;
	}

	async getAll(): Promise<Either<AppException, Array<LanguageEntity>>> {
		return this.languageMemoryDataProvider.getAll();
	}

}

export {
	LanguageRepositoryImpl,
}

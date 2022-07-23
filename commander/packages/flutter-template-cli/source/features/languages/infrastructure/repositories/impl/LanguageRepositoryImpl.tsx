import { LanguageRepository } from '../LanguageRepository';
import { LanguageEntity } from '../../../domain/entities/LanguageEntity';
import { either as E } from 'fp-ts';
import { LanguageMemoryDataProvider } from '../../data_sources/LanguageMemoryDataProvider';
import { Inject, Service } from 'typedi';
import { LanguageMemoryDataProviderImpl } from '../../data_sources/impl/LanguageMemoryDataProviderImpl';
import { GetAllLanguageException } from '../../../exceptions';
import Either = E.Either;

@Service()
class LanguageRepositoryImpl implements LanguageRepository {
  languageMemoryDataProvider: LanguageMemoryDataProvider;

  constructor(
    @Inject() languageMemoryDataProvider: LanguageMemoryDataProviderImpl,
  ) {
    this.languageMemoryDataProvider = languageMemoryDataProvider;
  }

  async getAll(): Promise<
    Either<GetAllLanguageException, Array<LanguageEntity>>
  > {
    return this.languageMemoryDataProvider.getAll();
  }
}

export { LanguageRepositoryImpl };

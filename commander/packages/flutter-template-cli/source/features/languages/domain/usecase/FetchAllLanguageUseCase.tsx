import { Inject, Service } from 'typedi';
import { LanguageRepository } from '../../infrastructure/repositories/LanguageRepository';
import { either as E } from 'fp-ts';
import Either = E.Either;
import { GetAllLanguageException } from '../../exceptions';
import { LanguageEntity } from '../entities/LanguageEntity';
import { LanguageRepositoryImpl } from '../../infrastructure/repositories/impl/LanguageRepositoryImpl';

@Service()
class FetchAllLanguageUseCase {
  private readonly _languageRepository: LanguageRepository;

  constructor(@Inject() languageRepository: LanguageRepositoryImpl) {
    this._languageRepository = languageRepository;
  }

  async call(): Promise<
    Either<GetAllLanguageException, Array<LanguageEntity>>
  > {
    return this._languageRepository.getAll();
  }
}

export { FetchAllLanguageUseCase };

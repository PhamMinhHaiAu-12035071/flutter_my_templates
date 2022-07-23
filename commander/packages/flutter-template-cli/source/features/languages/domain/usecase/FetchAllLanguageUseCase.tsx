import { Inject, Service } from 'typedi';
import { LanguageRepository } from '../../infrastructure/repositories/LanguageRepository';
import { either as E } from 'fp-ts';
import Either = E.Either;
import { GetAllLanguageException } from '../../exceptions';
import { LanguageEntity } from '../entities/LanguageEntity';
import { LanguageRepositoryImpl } from '../../infrastructure/repositories/impl/LanguageRepositoryImpl';

@Service()
class FetchAllLanguageUseCase {
  languageRepository: LanguageRepository;

  constructor(@Inject() languageRepository: LanguageRepositoryImpl) {
    this.languageRepository = languageRepository;
  }

  async call(): Promise<
    Either<GetAllLanguageException, Array<LanguageEntity>>
  > {
    return this.languageRepository.getAll();
  }
}

export { FetchAllLanguageUseCase };

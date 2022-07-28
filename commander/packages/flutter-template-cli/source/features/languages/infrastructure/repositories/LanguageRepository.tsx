import { LanguageEntity } from '../../domain/entities/LanguageEntity';
import { either as E } from 'fp-ts';
import Either = E.Either;
import { GetAllLanguageException } from '../../exceptions';

interface LanguageRepository {
  getAll(): Promise<Either<GetAllLanguageException, Array<LanguageEntity>>>;
}

export { LanguageRepository };

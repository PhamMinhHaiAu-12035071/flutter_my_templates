import { LanguageEntity } from '../../domain/entities/LanguageEntity';
import { AppException } from '../../../core/exceptions/AppException';
import { either as E } from 'fp-ts';
import Either = E.Either;

interface LanguageRepository {
	getAll(): Promise<Either<AppException, Array<LanguageEntity>>>;
}

export {
	LanguageRepository,
}

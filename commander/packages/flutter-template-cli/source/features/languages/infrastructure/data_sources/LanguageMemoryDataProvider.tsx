import { LanguageModel } from '../models/LanguageModel';
import { GetAllLanguageException } from '../../exceptions';
import { either as E } from 'fp-ts';
import Either = E.Either;

interface LanguageMemoryDataProvider {
	getAll(): Promise<Either<GetAllLanguageException, Array<LanguageModel>>>;
}

export {
	LanguageMemoryDataProvider,
}

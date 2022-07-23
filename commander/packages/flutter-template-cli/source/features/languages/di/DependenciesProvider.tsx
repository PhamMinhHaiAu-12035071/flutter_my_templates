import { Container } from 'typedi';
import { LanguageBloc } from '../presentation/pages/LanguageScreen/bloc/LanguageBloc';
import { FetchAllLanguageUseCase } from '../domain/usecase/FetchAllLanguageUseCase';

function provideLanguageBloc(): LanguageBloc {
  const fetchAllLanguageUseCase = Container.get<FetchAllLanguageUseCase>(
    FetchAllLanguageUseCase,
  );

  return new LanguageBloc(fetchAllLanguageUseCase);
}

export { provideLanguageBloc };

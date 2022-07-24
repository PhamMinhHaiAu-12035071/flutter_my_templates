import { Container } from 'typedi';
import { FetchAllLanguageUseCase } from '../domain/usecase/FetchAllLanguageUseCase';
import { LanguageBloc } from '../presentation/bloc/LanguageBloc';
import { NotifyChangeBloc } from '../presentation/bloc/NotifyChangeBloc';

function provideLanguageBloc(): LanguageBloc {
  const fetchAllLanguageUseCase = Container.get<FetchAllLanguageUseCase>(
    FetchAllLanguageUseCase,
  );

  return new LanguageBloc(fetchAllLanguageUseCase);
}

function provideNotifyChangeLanguageBloc(): NotifyChangeBloc {
  return new NotifyChangeBloc();
}

export { provideLanguageBloc, provideNotifyChangeLanguageBloc };

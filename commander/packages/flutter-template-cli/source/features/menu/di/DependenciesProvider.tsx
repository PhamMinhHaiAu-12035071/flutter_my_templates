import { MenuBloc } from '../presentation/bloc/MenuBloc';
import { FetchAllMenuItemUseCase } from '../domain/usecase/FetchAllMenuItemUseCase';
import { Container } from 'typedi';

function provideMenuBloc(): MenuBloc {
  const fetchAllMenuItemUseCase = Container.get<FetchAllMenuItemUseCase>(
    FetchAllMenuItemUseCase,
  );

  return new MenuBloc(fetchAllMenuItemUseCase);
}

export { provideMenuBloc };

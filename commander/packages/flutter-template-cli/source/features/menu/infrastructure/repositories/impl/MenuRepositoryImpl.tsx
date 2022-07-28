import { MenuRepository } from '../MenuRepository';
import { Service, Inject } from 'typedi';
import { either as E } from 'fp-ts';
import { GetAllMenuException } from '../../../exceptions';
import { MenuItemEntity } from '../../../domain/entities/MenuItemEntity';
import Either = E.Either;
import { MenuMemoryDataProvider } from '../../data_sources/MenuMemoryDataProvider';
import { MenuMemoryDataProviderImpl } from '../../data_sources/impl/MenuMemoryDataProviderImpl';

@Service()
class MenuRepositoryImpl implements MenuRepository {
  private _menuMemoryDataProvider: MenuMemoryDataProvider;

  constructor(@Inject() menuMemoryDataProvider: MenuMemoryDataProviderImpl) {
    this._menuMemoryDataProvider = menuMemoryDataProvider;
  }

  async getAll(): Promise<Either<GetAllMenuException, Array<MenuItemEntity>>> {
    return this._menuMemoryDataProvider.getAll();
  }
}

export { MenuRepositoryImpl };

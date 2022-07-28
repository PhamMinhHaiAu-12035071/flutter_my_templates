import { Inject, Service } from 'typedi';
import { either as E } from 'fp-ts';
import Either = E.Either;
import { MenuRepository } from '../../infrastructure/repositories/MenuRepository';
import { MenuRepositoryImpl } from '../../infrastructure/repositories/impl/MenuRepositoryImpl';
import { GetAllMenuException } from '../../exceptions';
import { MenuItemEntity } from '../entities/MenuItemEntity';

@Service()
class FetchAllMenuItemUseCase {
  private _menuRepository: MenuRepository;

  constructor(@Inject() menuRepository: MenuRepositoryImpl) {
    this._menuRepository = menuRepository;
  }

  async call(): Promise<Either<GetAllMenuException, Array<MenuItemEntity>>> {
    return this._menuRepository.getAll();
  }
}

export { FetchAllMenuItemUseCase };

import { either as E } from 'fp-ts';
import { GetAllMenuException } from '../../exceptions';
import { MenuItemModel } from '../models/MenuItemModel';
import Either = E.Either;

interface MenuMemoryDataProvider {
  getAll(): Promise<Either<GetAllMenuException, Array<MenuItemModel>>>;
}

export { MenuMemoryDataProvider };

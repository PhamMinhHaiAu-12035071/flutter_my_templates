import { either as E } from 'fp-ts';
import Either = E.Either;
import { GetAllMenuException } from '../../exceptions';
import { MenuItemEntity } from '../../domain/entities/MenuItemEntity';

interface MenuRepository {
  getAll(): Promise<Either<GetAllMenuException, Array<MenuItemEntity>>>;
}

export { MenuRepository };

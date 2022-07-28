import { either as E } from 'fp-ts';
import { Service } from 'typedi';
import { MenuMemoryDataProvider } from '../MenuMemoryDataProvider';
import { MenuItemModel } from '../../models/MenuItemModel';
import { GetAllMenuException } from '../../../exceptions';
import Either = E.Either;

@Service()
class MenuMemoryDataProviderImpl implements MenuMemoryDataProvider {
  async getAll(): Promise<Either<GetAllMenuException, Array<MenuItemModel>>> {
    const menus: Array<MenuItemModel> = [
      new MenuItemModel('1', 'language'),
      new MenuItemModel('2', 'createTemplateFlutterBlocNavigator2'),
    ];
    return Promise.resolve(E.right(menus));
  }
}

export { MenuMemoryDataProviderImpl };

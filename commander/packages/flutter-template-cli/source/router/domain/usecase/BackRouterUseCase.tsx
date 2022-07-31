import { Inject, Service } from 'typedi';
import { RouterEventBack } from '../../bloc/RouterEvent';

@Service()
class BackRouterUseCase {
  private readonly _useBloc: any;

  constructor(@Inject('bloc-router') useBloc: any) {
    this._useBloc = useBloc;
  }

  async call(): Promise<void> {
    return this._useBloc.add(new RouterEventBack());
  }
}

export { BackRouterUseCase };

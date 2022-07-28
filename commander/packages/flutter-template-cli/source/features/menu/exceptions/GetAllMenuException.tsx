import { AppException } from '../../core/exceptions/AppException';

class GetAllMenuException extends AppException {
  constructor() {
    super('Fetch all menu error');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GetAllMenuException.prototype);
  }

  override toString(): string {
    return `[GetAllMenuException]: ${this.message}`;
  }
}

export { GetAllMenuException };

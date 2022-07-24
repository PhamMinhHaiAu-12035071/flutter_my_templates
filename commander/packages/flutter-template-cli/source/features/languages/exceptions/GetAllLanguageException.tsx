import { AppException } from '../../core/exceptions/AppException';

class GetAllLanguageException extends AppException {
  constructor() {
    super('Fetch all languages error');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GetAllLanguageException.prototype);
  }

  override toString(): string {
    return `[GetAllLanguageException]: ${this.message}`;
  }
}

export { GetAllLanguageException };

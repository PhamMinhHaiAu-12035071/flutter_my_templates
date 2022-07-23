abstract class AppException extends Error {
	protected constructor(msg: string) {
		super(msg);
		// Set the prototype explicitly.
		Object.setPrototypeOf(this, AppException.prototype);
	}

}

export {
	AppException,
}

import path from "path";

class AssetImage {
	private readonly _name: string;
	private readonly _path: string;

	constructor(name: string, path: string) {
		this._name = name;
		this._path = path;
	}

	public get name() {
		return this._name;
	}

	public get path() {
		return this._path;
	}
}
abstract class ListAssetImage {
	public static readonly logoFlutter = new AssetImage('Logo Flutter', path.resolve(__dirname, "../../assets/images/logo-flutter.png"));
}

export {
	ListAssetImage,
}

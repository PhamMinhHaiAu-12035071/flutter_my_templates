import path from 'path';
import { fileURLToPath } from "url"; // the node package 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(`show dir name: ${__dirname}`)
console.log(`show file name: ${__filename}`)
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
	public static readonly logoFlutter = new AssetImage('Logo Flutter', path.resolve(__dirname, "../../../assets/images/logo-flutter.png"));
}

export {
	ListAssetImage,
}

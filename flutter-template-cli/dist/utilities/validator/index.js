"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPathFileExtension = exports.v = void 0;
const fastest_validator_1 = __importDefault(require("fastest-validator"));
exports.v = new fastest_validator_1.default({
    useNewCustomCheckerFunction: true,
    messages: {
        // Register our new error message text
        pathNotExists: "The '{field}' field must be an path exists.\n(Example: ~/Desktop, ~/Downloads)",
        extensionNotSupported: "The '{field}' field only supports extensions {expected}.\n(Example: ~/Desktop/flutter.zip, ~/Downloads/flutter.zip)",
    },
});
const checkPathFileExtension = (pathFile, extension) => {
    const lengthExtension = extension.length;
    const lastExtensionCharacter = pathFile.slice(pathFile.length - lengthExtension);
    return lastExtensionCharacter === extension;
};
exports.checkPathFileExtension = checkPathFileExtension;

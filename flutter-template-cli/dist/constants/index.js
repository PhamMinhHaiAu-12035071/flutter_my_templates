"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_FILE = exports.ABSOLUTE_PATH_FOLDER_FLUTTER_TEMPLATE = exports.ABSOLUTE_PATH_FOLDER_BIN = exports.DELAY_QUIT_APP = exports.ZERO_DELAY = exports.SPACE_CHARACTER = exports.PATH_ZIP_EXTENSION = exports.SCRIPT_SHOW_FOLDER_AND_FILE_ZIP = exports.SCRIPT_SHOW_ABSOLUTE_PATH = exports.SCRIPT_CHECK_FILE_EXISTS = void 0;
const path_1 = __importDefault(require("path"));
const configs_1 = __importDefault(require("./configs"));
exports.SCRIPT_CHECK_FILE_EXISTS = path_1.default.join(__dirname, '../../scripts/check_file_exists.sh');
exports.SCRIPT_SHOW_ABSOLUTE_PATH = path_1.default.join(__dirname, '../../scripts/show_absolute_path.sh');
exports.SCRIPT_SHOW_FOLDER_AND_FILE_ZIP = path_1.default.join(__dirname, '../../scripts/show_folder_and_file_zip.sh');
exports.PATH_ZIP_EXTENSION = '.zip';
__exportStar(require("./colors"), exports);
__exportStar(require("./spinners"), exports);
__exportStar(require("./status"), exports);
exports.SPACE_CHARACTER = ' ';
exports.ZERO_DELAY = 0;
exports.DELAY_QUIT_APP = 150;
exports.ABSOLUTE_PATH_FOLDER_BIN = path_1.default.join(__dirname, configs_1.default.PATH_FOLDER_BIN);
exports.ABSOLUTE_PATH_FOLDER_FLUTTER_TEMPLATE = path_1.default.join(__dirname, configs_1.default.PATH_FOLDER_FLUTTER_TEMPLATE);
var TYPE_FILE;
(function (TYPE_FILE) {
    TYPE_FILE["FILE"] = "FILE";
    TYPE_FILE["FOLDER"] = "FOLDER";
})(TYPE_FILE = exports.TYPE_FILE || (exports.TYPE_FILE = {}));
//# sourceMappingURL=index.js.map
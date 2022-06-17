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
exports.Status = exports.PATH_ZIP_EXTENSION = exports.SCRIPT_CHECK_FILE_EXISTS = void 0;
const path_1 = __importDefault(require("path"));
exports.SCRIPT_CHECK_FILE_EXISTS = path_1.default.join(__dirname, '../../scripts/check_file_exists.sh');
exports.PATH_ZIP_EXTENSION = '.zip';
__exportStar(require("./colors"), exports);
__exportStar(require("./spinners"), exports);
var Status;
(function (Status) {
    Status["INITIAL"] = "INITIAL";
    Status["SUCCESS"] = "SUCCESS";
    Status["ERROR"] = "ERROR";
    Status["LOADING"] = "LOADING";
})(Status = exports.Status || (exports.Status = {}));

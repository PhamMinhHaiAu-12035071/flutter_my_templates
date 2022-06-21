"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const pathSlice_1 = __importDefault(require("./reducers/pathSlice"));
const configs_1 = __importDefault(require("../constants/configs"));
const createFolderSlice_1 = __importDefault(require("./reducers/createFolderSlice"));
const copyZipSlice_1 = __importDefault(require("./reducers/copyZipSlice"));
const suggestKeywordSlice_1 = __importDefault(require("./reducers/suggestKeywordSlice"));
const middlewares = [];
if (configs_1.default.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        path: pathSlice_1.default,
        createFolder: createFolderSlice_1.default,
        copyZipFlutter: copyZipSlice_1.default,
        suggestKeyword: suggestKeywordSlice_1.default,
    },
    middleware: middlewares,
});
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputPathContainer_1 = require("./components/InputPath/InputPathContainer");
const stores_1 = require("./stores");
const react_redux_1 = require("react-redux");
const CreateFolderBinContainer_1 = require("./components/CreateFolderBin/CreateFolderBinContainer");
const CopyFileZipContainer_1 = require("./components/CopyFlutterZip/CopyFileZipContainer");
const ShowProgressTable_1 = require("./components/CopyFlutterZip/ShowProgressTable");
const App = () => (react_1.default.createElement(react_redux_1.Provider, { store: stores_1.store },
    react_1.default.createElement(InputPathContainer_1.InputPathContainer, null),
    react_1.default.createElement(CreateFolderBinContainer_1.CreateFolderBinContainer, null),
    react_1.default.createElement(ShowProgressTable_1.ShowProgressTable, null),
    react_1.default.createElement(CopyFileZipContainer_1.CopyFileZipContainer, null)));
module.exports = App;
exports.default = App;
//# sourceMappingURL=ui.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFolderLoading = void 0;
const ink_1 = require("ink");
const constants_1 = require("../../constants");
const ink_spinner_1 = __importDefault(require("ink-spinner"));
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importDefault(require("react"));
const CreateFolderLoading = () => {
    return (react_1.default.createElement(ink_1.Text, null,
        react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_YELLOW },
            react_1.default.createElement(ink_spinner_1.default, { type: "dots" })),
        react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_YELLOW }, lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 2) + 'Create folder bin')));
};
exports.CreateFolderLoading = CreateFolderLoading;

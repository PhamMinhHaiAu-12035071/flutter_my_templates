"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSuggestEmpty = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const styledContainer = {
    marginLeft: 2,
};
const ShowSuggestEmpty = () => {
    return (react_1.default.createElement(ink_1.Box, { ...styledContainer },
        react_1.default.createElement(ink_1.Text, null, "Not found data")));
};
exports.ShowSuggestEmpty = ShowSuggestEmpty;
//# sourceMappingURL=ShowSuggestEmpty.js.map
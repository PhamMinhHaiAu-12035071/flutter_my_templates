"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSuggestSuccess = void 0;
const useAppSelector_1 = require("../../hooks/useAppSelector");
const suggestKeywordSlice_1 = require("../../stores/reducers/suggestKeywordSlice");
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const styledColumnItem = {
    flexDirection: 'column',
    marginLeft: 2,
};
const styledRowItem = {
    flexDirection: 'row',
};
const styledItemText = {
    wrap: 'truncate',
};
const numberOfRows = 4;
const ShowSuggestSuccess = () => {
    const data = (0, useAppSelector_1.useAppSelector)(suggestKeywordSlice_1.selectSuggestKeywordData);
    return (react_1.default.createElement(ink_1.Box, null, lodash_1.default.chain(data)
        .chunk(numberOfRows)
        .value()
        .map((row, index) => {
        return (react_1.default.createElement(ink_1.Box, { key: index.toString(), ...styledColumnItem }, row.map((item, index) => {
            return (react_1.default.createElement(ink_1.Box, { key: index.toString(), ...styledRowItem },
                react_1.default.createElement(ink_1.Text, { ...styledItemText },
                    "\u2714 ",
                    item.name,
                    " ")));
        })));
    })));
};
exports.ShowSuggestSuccess = ShowSuggestSuccess;
//# sourceMappingURL=ShowSuggestSuccess.js.map
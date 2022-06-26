"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemShowSuggestSuccess = void 0;
const ink_1 = require("ink");
const CustomSpinner_1 = require("../CustomSpinner/CustomSpinner");
const constants_1 = require("../../constants");
const react_1 = __importDefault(require("react"));
const styledItemTextNormal = {
    wrap: 'truncate',
};
const styledItemTextActive = {
    wrap: 'truncate',
    backgroundColor: constants_1.Colors.SYSTEM_GREEN,
};
const ItemShowSuggestSuccess = (props) => {
    const itemType = props.type === constants_1.TYPE_FILE.FOLDER ? constants_1.folderSpinner : constants_1.fileSpinner;
    const styledText = props.isActive ? styledItemTextActive : styledItemTextNormal;
    return (react_1.default.createElement(ink_1.Box, null,
        react_1.default.createElement(CustomSpinner_1.CustomSpinner, { spinner: itemType, arrText: [react_1.default.createElement(ink_1.Text, { ...styledText }, constants_1.SPACE_CHARACTER + props.name + constants_1.SPACE_CHARACTER)] })));
};
exports.ItemShowSuggestSuccess = ItemShowSuggestSuccess;
//# sourceMappingURL=ItemShowSuggestSuccess.js.map
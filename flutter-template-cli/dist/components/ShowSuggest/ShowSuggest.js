"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSuggest = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const constants_1 = require("../../constants");
const BoxRow_1 = require("../BoxRow/BoxRow");
const ShowSuggestLoading_1 = require("./ShowSuggestLoading");
const ShowSuggestSuccess_1 = require("./ShowSuggestSuccess");
const suggestKeywordSlice_1 = require("../../stores/reducers/suggestKeywordSlice");
const ShowSuggestEmpty_1 = require("./ShowSuggestEmpty");
const styledWrapperTitleSuggest = {
    paddingLeft: 2,
};
const styledTitleSuggest = {
    color: constants_1.Colors.SYSTEM_GRAY_2,
};
const ShowSuggest = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { ...styledWrapperTitleSuggest },
            react_1.default.createElement(ink_1.Text, { ...styledTitleSuggest },
                "Press 'Tab' to show suggest folder or file zip",
                react_1.default.createElement(ink_1.Newline, null),
                react_1.default.createElement(ink_1.Text, null, "Press 'Tab' again to move"),
                react_1.default.createElement(ink_1.Newline, null),
                react_1.default.createElement(ink_1.Text, null, "Press 'Enter' to choose"))),
        props.status === suggestKeywordSlice_1.StatusSuggestKeywordCombine.LOADING && (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(ShowSuggestLoading_1.ShowSuggestLoading, null))),
        (props.status === suggestKeywordSlice_1.StatusSuggestKeywordCombine.SUCCESS ||
            props.status === suggestKeywordSlice_1.StatusSuggestKeywordCombine.CHOOSE_TAB) && (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(ShowSuggestSuccess_1.ShowSuggestSuccess, { data: props.data }))),
        props.status === suggestKeywordSlice_1.SuggestKeywordStatus.EMPTY_DATA && (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(ShowSuggestEmpty_1.ShowSuggestEmpty, null)))));
};
exports.ShowSuggest = ShowSuggest;
//# sourceMappingURL=ShowSuggest.js.map
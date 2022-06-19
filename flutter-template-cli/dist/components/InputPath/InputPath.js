"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPath = void 0;
const ink_1 = require("ink");
const ink_text_input_1 = __importDefault(require("ink-text-input"));
const react_1 = __importDefault(require("react"));
const constants_1 = require("../../constants");
const lodash_1 = __importDefault(require("lodash"));
const CustomSpinner_1 = require("../CustomSpinner/CustomSpinner");
const ink_spinner_1 = __importDefault(require("ink-spinner"));
const BoxRow_1 = require("../BoxRow/BoxRow");
const ShowSuggest_1 = require("./ShowSuggest");
/**
 * Define styles
 */
const styledContainer = {
    borderStyle: 'round',
    borderColor: constants_1.Colors.SYSTEM_TEAL,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    paddingBottom: 1,
};
const styledTitle = {
    marginRight: 1,
};
const styledTextError = {
    color: constants_1.Colors.SYSTEM_RED,
};
const title = 'Enter your path zip of flutter:';
const InputPath = (props) => {
    // console.log(`render input path ${JSON.stringify(props)}`);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { ...styledContainer },
            react_1.default.createElement(ink_1.Box, { ...styledTitle },
                react_1.default.createElement(ink_1.Text, null, title)),
            react_1.default.createElement(ink_text_input_1.default, { highlightPastedText: true, value: props.path, placeholder: 'Enter your path zip of flutter', onSubmit: props.onSubmit, onChange: props.onChange, showCursor: props.status === constants_1.Status.INITIAL || props.status === constants_1.Status.ERROR })),
        react_1.default.createElement(ShowSuggest_1.ShowSuggest, { path: props.path }),
        react_1.default.createElement(RenderSpinner, { status: props.status, time: props.time }),
        !lodash_1.default.isEmpty(props.errors) &&
            props.status === constants_1.Status.ERROR &&
            props.path.length === 0 &&
            props.errors?.map((error, index) => {
                return (react_1.default.createElement(BoxRow_1.BoxRow, { key: index.toString() },
                    react_1.default.createElement(ink_1.Text, { ...styledTextError }, error.message)));
            })));
};
exports.InputPath = InputPath;
const RenderSpinner = (props) => {
    if (props.status === constants_1.Status.LOADING) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(ink_1.Text, null,
                react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_YELLOW },
                    react_1.default.createElement(ink_spinner_1.default, { type: "dots" })),
                react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_YELLOW }, lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 2) + 'Recognize flutter path...'))));
    }
    else if (props.status === constants_1.Status.SUCCESS && props.time !== '') {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(CustomSpinner_1.CustomSpinner, { spinner: constants_1.checkedSpinner, colorSpinner: constants_1.Colors.SYSTEM_GREEN, arrText: [
                    react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_GREEN }, constants_1.SPACE_CHARACTER + 'Recognize flutter path success!' + lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 2)),
                    react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_GRAY },
                        "(",
                        props.time,
                        ")"),
                ] })));
    }
    return null;
};
//# sourceMappingURL=InputPath.js.map
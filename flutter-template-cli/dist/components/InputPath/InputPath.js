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
const useAppSelector_1 = require("../../hooks/useAppSelector");
const pathSlice_1 = require("../../stores/reducers/pathSlice");
const CustomSpinner_1 = require("../CustomSpinner/CustomSpinner");
const ink_spinner_1 = __importDefault(require("ink-spinner"));
/**
 * Define styles
 */
const styledContainer = {
    marginRight: 1,
};
const styledTextError = {
    color: constants_1.Colors.SYSTEM_RED,
};
const title = 'Enter your path zip of flutter:';
const InputPath = (props) => {
    const errors = (0, useAppSelector_1.useAppSelector)(pathSlice_1.selectPathErrors);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { borderStyle: "classic" },
            react_1.default.createElement(ink_1.Box, { ...styledContainer },
                react_1.default.createElement(ink_1.Text, null, title)),
            react_1.default.createElement(ink_text_input_1.default, { highlightPastedText: true, value: props.path, placeholder: 'Enter your path zip of flutter', onSubmit: props.onSubmit, onChange: props.onChange })),
        react_1.default.createElement(RenderSpinner, { status: props.status }),
        !lodash_1.default.isEmpty(errors) &&
            errors?.map((error, index) => {
                return (react_1.default.createElement(ink_1.Box, { key: index.toString() },
                    react_1.default.createElement(ink_1.Text, { ...styledTextError }, error.message)));
            })));
};
exports.InputPath = InputPath;
const RenderSpinner = (props) => {
    const spaceCharacter = ' ';
    if (props.status === constants_1.Status.LOADING) {
        return (react_1.default.createElement(ink_1.Text, null,
            react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_YELLOW },
                react_1.default.createElement(ink_spinner_1.default, { type: "dots" })),
            react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_YELLOW }, spaceCharacter + 'Loading...')));
    }
    else if (props.status === constants_1.Status.SUCCESS) {
        return (react_1.default.createElement(CustomSpinner_1.CustomSpinner, { spinner: constants_1.checkedSpinner, colorSpinner: constants_1.Colors.SYSTEM_GREEN, colorText: constants_1.Colors.SYSTEM_GREEN, text: `${spaceCharacter + 'Recognize flutter path success!'}` }));
    }
    return null;
};

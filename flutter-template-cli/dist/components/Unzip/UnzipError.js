"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnzipError = void 0;
const CustomSpinner_1 = require("../CustomSpinner/CustomSpinner");
const constants_1 = require("../../constants");
const ink_1 = require("ink");
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importDefault(require("react"));
const useAppSelector_1 = require("../../hooks/useAppSelector");
const unzipSlice_1 = require("../../stores/reducers/unzipSlice");
const styledText = {
    color: constants_1.Colors.SYSTEM_RED,
};
const styledTime = {
    color: constants_1.Colors.SYSTEM_GRAY,
};
const UnzipError = () => {
    const time = (0, useAppSelector_1.useAppSelector)(unzipSlice_1.selectUnzipExecuteTimeError);
    const { exit } = (0, ink_1.useApp)();
    react_1.default.useEffect(() => {
        setTimeout(() => {
            exit();
        }, constants_1.DELAY_QUIT_APP);
    }, []);
    return (react_1.default.createElement(CustomSpinner_1.CustomSpinner, { spinner: constants_1.errorSpinner, colorSpinner: constants_1.Colors.SYSTEM_RED, arrText: [
            react_1.default.createElement(ink_1.Text, { ...styledText }, lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 1) +
                'Error unzip file flutter!' +
                lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 2)),
            react_1.default.createElement(ink_1.Text, { ...styledTime },
                "(",
                time,
                ")"),
        ] }));
};
exports.UnzipError = UnzipError;
//# sourceMappingURL=UnzipError.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnzipSuccess = void 0;
const useAppSelector_1 = require("../../hooks/useAppSelector");
const CustomSpinner_1 = require("../CustomSpinner/CustomSpinner");
const constants_1 = require("../../constants");
const ink_1 = require("ink");
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importDefault(require("react"));
const unzipSlice_1 = require("../../stores/reducers/unzipSlice");
const styledText = {
    color: constants_1.Colors.SYSTEM_GREEN,
};
const styledTime = {
    color: constants_1.Colors.SYSTEM_GRAY,
};
const UnzipSuccess = () => {
    const time = (0, useAppSelector_1.useAppSelector)(unzipSlice_1.selectUnzipExecuteTimeSuccess);
    return (react_1.default.createElement(CustomSpinner_1.CustomSpinner, { spinner: constants_1.checkedSpinner, colorSpinner: constants_1.Colors.SYSTEM_GREEN, arrText: [
            react_1.default.createElement(ink_1.Text, { ...styledText }, constants_1.SPACE_CHARACTER + 'Unzip file flutter success!' + lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 2)),
            react_1.default.createElement(ink_1.Text, { ...styledTime },
                "(",
                time,
                ")"),
        ] }));
};
exports.UnzipSuccess = UnzipSuccess;
//# sourceMappingURL=UnzipSuccess.js.map
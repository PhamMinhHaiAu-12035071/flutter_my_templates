"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFolderSuccess = void 0;
const CustomSpinner_1 = require("../CustomSpinner/CustomSpinner");
const constants_1 = require("../../constants");
const ink_1 = require("ink");
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importDefault(require("react"));
const useAppSelector_1 = require("../../hooks/useAppSelector");
const createFolderSlice_1 = require("../../stores/reducers/createFolderSlice");
const CreateFolderSuccess = () => {
    const time = (0, useAppSelector_1.useAppSelector)(createFolderSlice_1.selectCreateFolderExecuteTimeSuccess);
    return (react_1.default.createElement(CustomSpinner_1.CustomSpinner, { spinner: constants_1.checkedSpinner, colorSpinner: constants_1.Colors.SYSTEM_GREEN, arrText: [
            react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_GREEN }, constants_1.SPACE_CHARACTER + 'Create folder executed success!' + lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 2)),
            react_1.default.createElement(ink_1.Text, { color: constants_1.Colors.SYSTEM_GRAY },
                "(",
                time,
                ")"),
        ] }));
};
exports.CreateFolderSuccess = CreateFolderSuccess;

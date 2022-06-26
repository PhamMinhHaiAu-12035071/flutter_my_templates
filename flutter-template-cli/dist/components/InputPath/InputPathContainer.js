"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPathContainer = void 0;
const react_1 = __importDefault(require("react"));
const utilities_1 = require("../../utilities");
const constants_1 = require("../../constants");
const InputPath_1 = require("./InputPath");
const react_redux_1 = require("react-redux");
const pathSlice_1 = require("../../stores/reducers/pathSlice");
const useAppSelector_1 = require("../../hooks/useAppSelector");
const createFolderSlice_1 = require("../../stores/reducers/createFolderSlice");
const shell = require('shelljs');
/**
 * Define validator
 */
const schema = {
    path: {
        type: 'custom',
        check(value, errors) {
            const result = shell.exec(`${constants_1.SCRIPT_CHECK_FILE_EXISTS} ${value}`, { async: false }).code;
            const checkExtension = (0, utilities_1.checkPathFileExtension)(value, constants_1.PATH_ZIP_EXTENSION);
            if (!checkExtension) {
                errors.push({
                    actual: undefined,
                    type: 'extensionNotSupported',
                    expected: '(zip)',
                });
            }
            if (result === 1) {
                errors.push({
                    actual: undefined,
                    type: 'pathNotExists',
                    expected: undefined,
                });
            }
            return value;
        },
    },
};
const check = utilities_1.v.compile(schema);
const InputPathContainer = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const status = (0, useAppSelector_1.useAppSelector)(pathSlice_1.selectPathStatus);
    const errors = (0, useAppSelector_1.useAppSelector)(pathSlice_1.selectPathErrors);
    const time = (0, useAppSelector_1.useAppSelector)(pathSlice_1.selectPathExecuteTimeSuccess);
    const path = (0, useAppSelector_1.useAppSelector)(pathSlice_1.selectPathData);
    // const dataActive = useAppSelector<SuggestKeywordData | undefined>(selectSuggestKeywordActiveData);
    // React.useMemo(() => {
    //   console.log(`show data active: ${dataActive}`);
    //   if (dataActive?.name !== '') {
    //     const value = `${path}${dataActive?.name}`;
    //     const action = setPath(value);
    //     dispatch(action);
    //   }
    // }, [dataActive]);
    const _handlePathValid = (value) => {
        const action = (0, pathSlice_1.setPathSuccess)(value);
        dispatch(action);
        const actionLoading = (0, createFolderSlice_1.setCreateFolderLoading)();
        dispatch(actionLoading);
    };
    const _handlePathInvalid = (result) => {
        const action = (0, pathSlice_1.setPathFailed)(result);
        dispatch(action);
    };
    const _onSubmit = async (value) => {
        dispatch((0, pathSlice_1.setPathLoading)());
        const obj = {
            path: value,
        };
        const result = await check(obj, schema);
        if (result === true) {
            _handlePathValid(value);
        }
        else {
            _handlePathInvalid(result);
        }
    };
    const _onChange = (value) => {
        const action = (0, pathSlice_1.setPath)(value);
        dispatch(action);
    };
    return (react_1.default.createElement(InputPath_1.InputPath, { path: path, onChange: _onChange, onSubmit: _onSubmit, status: status, errors: errors, time: time }));
};
exports.InputPathContainer = InputPathContainer;
//# sourceMappingURL=InputPathContainer.js.map
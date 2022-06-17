"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPathContainer = void 0;
const react_1 = __importDefault(require("react"));
const validator_1 = require("../../utilities/validator");
const constants_1 = require("../../constants");
const InputPath_1 = require("./InputPath");
const react_redux_1 = require("react-redux");
const pathSlice_1 = require("../../stores/reducers/pathSlice");
const lodash_1 = __importDefault(require("lodash"));
const useAppSelector_1 = require("../../hooks/useAppSelector");
const shell = require('shelljs');
const DELAY = 3000;
/**
 * Define validator
 */
const schema = {
    path: {
        type: 'custom',
        check(value, errors) {
            const result = shell.exec(`${constants_1.SCRIPT_CHECK_FILE_EXISTS} ${value}`, { async: false }).code;
            const checkExtension = (0, validator_1.checkPathFileExtension)(value, constants_1.PATH_ZIP_EXTENSION);
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
const check = validator_1.v.compile(schema);
const InputPathContainer = () => {
    const [path, setPath] = react_1.default.useState('');
    const dispatch = (0, react_redux_1.useDispatch)();
    const status = (0, useAppSelector_1.useAppSelector)(pathSlice_1.selectPathStatus);
    react_1.default.useMemo(() => {
        if (status === constants_1.Status.ERROR) {
            setPath('');
        }
    }, [status]);
    react_1.default.useEffect(() => {
        if (path.length > 0 && status === constants_1.Status.ERROR) {
            const action = (0, pathSlice_1.setEmptyError)();
            dispatch(action);
        }
    }, [path, status]);
    const _handleClearText = () => {
        setPath('');
    };
    const _handlePathValid = (value) => {
        const action = (0, pathSlice_1.setPathSuccess)(value);
        dispatch(action);
    };
    const _handlePathInvalid = (result) => {
        _handleClearText();
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
            lodash_1.default.delay(_handlePathValid, DELAY, value);
        }
        else {
            lodash_1.default.delay(_handlePathInvalid, DELAY, result);
        }
    };
    const _onChange = (value) => {
        setPath(value);
    };
    return react_1.default.createElement(InputPath_1.InputPath, { path: path, onChange: _onChange, onSubmit: _onSubmit, status: status });
};
exports.InputPathContainer = InputPathContainer;

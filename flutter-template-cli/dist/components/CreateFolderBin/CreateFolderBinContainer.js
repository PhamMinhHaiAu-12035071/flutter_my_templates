"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFolderBinContainer = void 0;
const react_1 = __importDefault(require("react"));
const useAppSelector_1 = require("../../hooks/useAppSelector");
const constants_1 = require("../../constants");
const createFolderSlice_1 = require("../../stores/reducers/createFolderSlice");
const CreateFolderLoading_1 = require("./CreateFolderLoading");
const react_redux_1 = require("react-redux");
const CreateFolderSuccess_1 = require("./CreateFolderSuccess");
const CreateFolderExists_1 = require("./CreateFolderExists");
const BoxRow_1 = require("../BoxRow/BoxRow");
const copyZipSlice_1 = require("../../stores/reducers/copyZipSlice");
const fs = require('fs');
const CreateFolderBinContainer = () => {
    const status = (0, useAppSelector_1.useAppSelector)(createFolderSlice_1.selectCreateFolderStatus);
    const dispatch = (0, react_redux_1.useDispatch)();
    const _executeCreateFolder = () => {
        setTimeout(() => {
            if (fs.existsSync(constants_1.ABSOLUTE_PATH_FOLDER_BIN)) {
                const action = (0, createFolderSlice_1.setCreateFolderExists)();
                dispatch(action);
            }
            else {
                fs.mkdirSync(constants_1.ABSOLUTE_PATH_FOLDER_BIN);
                const action = (0, createFolderSlice_1.setCreateFolderSuccess)();
                dispatch(action);
            }
            const action = (0, copyZipSlice_1.setCopyZipFlutterLoading)();
            dispatch(action);
        }, constants_1.ZERO_DELAY);
    };
    react_1.default.useMemo(() => {
        if (status === constants_1.Status.LOADING) {
            _executeCreateFolder();
        }
    }, [status]);
    if (status === constants_1.Status.LOADING) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(CreateFolderLoading_1.CreateFolderLoading, null)));
    }
    else if (status === constants_1.Status.SUCCESS) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(CreateFolderSuccess_1.CreateFolderSuccess, null)));
    }
    else if (status === createFolderSlice_1.StatusFolder.PATH_FOLDER_EXISTS) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(CreateFolderExists_1.CreateFolderExists, null)));
    }
    return null;
};
exports.CreateFolderBinContainer = CreateFolderBinContainer;

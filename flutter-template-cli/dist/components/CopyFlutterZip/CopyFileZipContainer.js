"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyFileZipContainer = void 0;
const constants_1 = require("../../constants");
const react_1 = __importDefault(require("react"));
const useAppSelector_1 = require("../../hooks/useAppSelector");
const BoxRow_1 = require("../BoxRow/BoxRow");
const CopyFileZipLoading_1 = require("./CopyFileZipLoading");
const copyZipSlice_1 = require("../../stores/reducers/copyZipSlice");
const pathSlice_1 = require("../../stores/reducers/pathSlice");
const uuid_1 = require("uuid");
const services_1 = require("../../services");
const react_redux_1 = require("react-redux");
const execSync = require('child_process').execSync;
const CopyFileZipContainer = () => {
    const status = (0, useAppSelector_1.useAppSelector)(copyZipSlice_1.selectCopyZipFlutterStatus);
    const pathSource = (0, useAppSelector_1.useAppSelector)(pathSlice_1.selectRelativePath);
    const dispatch = (0, react_redux_1.useDispatch)();
    const _copyFileZip = () => {
        const source = execSync(`${constants_1.SCRIPT_SHOW_ABSOLUTE_PATH} ${pathSource}`).toString();
        const dest = constants_1.ABSOLUTE_PATH_FOLDER_BIN + (0, uuid_1.v4)() + '.zip';
        services_1.RsyncService.getInstance().copyFile(source, dest, {
            onDone: _onDone,
            onProgress: _onProgress,
            onError: _onError,
        });
    };
    const _onDone = (error, code, cmd) => {
        console.log(`[_onDone] ${error} ${code} ${cmd}`);
    };
    const _onProgress = (data) => {
        if (data !== undefined) {
            const action = (0, copyZipSlice_1.setProgress)(data);
            dispatch(action);
        }
    };
    const _onError = (data) => {
        console.log(`[_onError]: ${data}`);
    };
    react_1.default.useMemo(() => {
        if (status === constants_1.Status.LOADING) {
            _copyFileZip();
        }
    }, [status]);
    if (status === constants_1.Status.LOADING) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(CopyFileZipLoading_1.CopyFileZipLoading, null)));
    }
    return null;
};
exports.CopyFileZipContainer = CopyFileZipContainer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnzipContainer = void 0;
const BoxRow_1 = require("../BoxRow/BoxRow");
const UnzipLoading_1 = require("./UnzipLoading");
const react_1 = __importDefault(require("react"));
const constants_1 = require("../../constants");
const useAppSelector_1 = require("../../hooks/useAppSelector");
const unzipSlice_1 = require("../../stores/reducers/unzipSlice");
const copyZipSlice_1 = require("../../stores/reducers/copyZipSlice");
const react_redux_1 = require("react-redux");
const progress_unzip_service_1 = require("../../services/progress_unzip.service");
const util = require('util');
const UnzipContainer = () => {
    const status = (0, useAppSelector_1.useAppSelector)(unzipSlice_1.selectUnzipStatus);
    const pathZip = (0, useAppSelector_1.useAppSelector)(copyZipSlice_1.selectCopyZipFlutterData);
    const dispatch = (0, react_redux_1.useDispatch)();
    const _unzipFolder = () => {
        console.log('called _unzipFolder');
        progress_unzip_service_1.ProgressUnzipService.getInstance().unzipFile(pathZip, constants_1.ABSOLUTE_PATH_FOLDER_BIN, {
            onDone: _onDone,
            onProgress: _onProgress,
            onError: _onError,
        });
    };
    const _onDone = () => {
        console.log('done');
    };
    const _onError = (e) => {
        console.log(`Error: ${e}`);
    };
    const _onProgress = (progress) => {
        const action = (0, unzipSlice_1.setProgress)(progress);
        dispatch(action);
        console.log(util.inspect(progress, { showHidden: false, depth: null, colors: true }));
    };
    react_1.default.useMemo(() => {
        if (status === constants_1.Status.LOADING) {
            _unzipFolder();
        }
    }, [status]);
    if (status === constants_1.Status.LOADING) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(UnzipLoading_1.UnzipLoading, null)));
    }
    return null;
};
exports.UnzipContainer = UnzipContainer;
//# sourceMappingURL=UnzipContainer.js.map
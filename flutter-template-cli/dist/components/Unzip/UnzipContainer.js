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
const progress_unzip_service_1 = require("../../services/progress_unzip_service");
const UnzipSuccess_1 = require("./UnzipSuccess");
const UnzipError_1 = require("./UnzipError");
const UnzipContainer = () => {
    const status = (0, useAppSelector_1.useAppSelector)(unzipSlice_1.selectUnzipStatus);
    const pathZip = (0, useAppSelector_1.useAppSelector)(copyZipSlice_1.selectCopyZipFlutterData);
    const dispatch = (0, react_redux_1.useDispatch)();
    const _unzipFolder = () => {
        progress_unzip_service_1.ProgressUnzipService.getInstance().unzipFile(pathZip, constants_1.ABSOLUTE_PATH_FOLDER_BIN, {
            onProgress: _onProgress,
            onSuccess: _onSuccess,
            onError: _onError,
        });
    };
    const _onProgress = (progress) => {
        const action = (0, unzipSlice_1.setProgress)(progress);
        dispatch(action);
    };
    const _onSuccess = () => {
        const action = (0, unzipSlice_1.setSuccess)();
        dispatch(action);
    };
    const _onError = (error) => {
        const action = (0, unzipSlice_1.setError)(error);
        dispatch(action);
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
    else if (status === constants_1.Status.SUCCESS) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(UnzipSuccess_1.UnzipSuccess, null)));
    }
    else if (status === constants_1.Status.ERROR) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(UnzipError_1.UnzipError, null)));
    }
    return null;
};
exports.UnzipContainer = UnzipContainer;
//# sourceMappingURL=UnzipContainer.js.map
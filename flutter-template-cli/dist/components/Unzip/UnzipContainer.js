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
const worker_threads_1 = require("worker_threads");
const util = require('util');
const UnzipContainer = () => {
    const status = (0, useAppSelector_1.useAppSelector)(unzipSlice_1.selectUnzipStatus);
    const pathZip = (0, useAppSelector_1.useAppSelector)(copyZipSlice_1.selectCopyZipFlutterData);
    const dispatch = (0, react_redux_1.useDispatch)();
    const _unzipFolder = () => {
        console.log('called _unzipFolder');
        const worker = new worker_threads_1.Worker('./source/services/worker_main.js', {
            workerData: {
                source: pathZip,
                destination: constants_1.ABSOLUTE_PATH_FOLDER_BIN,
                path: './worker_demo.ts',
            },
        });
        worker.on('message', result => {
            console.log(`show result worker`);
            console.log(util.inspect(result, { showHidden: false, depth: null, colors: true }));
            const action = (0, unzipSlice_1.setProgress)(result);
            dispatch(action);
        });
        // ProgressUnzipService.getInstance().unzipFile(pathZip, ABSOLUTE_PATH_FOLDER_BIN, {
        //   onDone: _onDone,
        //   onProgress: _onProgress,
        //   onError: _onError,
        // });
    };
    // const _onDone = (): void => {
    //   console.log('done');
    // };
    //
    // const _onError = (e: never): void => {
    //   console.log(`Error: ${e}`);
    // };
    //
    // const _onProgress = (progress: Progress): void => {
    //   const action = setProgress(progress);
    //   dispatch(action);
    //
    //   console.log(util.inspect(progress, { showHidden: false, depth: null, colors: true }));
    // };
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
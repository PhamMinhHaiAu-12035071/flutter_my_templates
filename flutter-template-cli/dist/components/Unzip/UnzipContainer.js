"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const unzipper_1 = __importDefault(require("unzipper"));
const fs = __importStar(require("fs"));
const progress_stream_1 = __importDefault(require("progress-stream"));
const UnzipContainer = () => {
    const status = (0, useAppSelector_1.useAppSelector)(unzipSlice_1.selectUnzipStatus);
    const pathZip = (0, useAppSelector_1.useAppSelector)(copyZipSlice_1.selectCopyZipFlutterData);
    const _unzipFolder = async () => {
        const stat = fs.statSync(pathZip);
        const str = (0, progress_stream_1.default)({
            length: stat.size,
            time: 100 /* ms */,
        });
        str.on('progress', function (progress) {
            console.log('show progress');
            console.log(progress);
            /*
                  {
                          percentage: 9.05,
                          transferred: 949624,
                          length: 10485760,
                          remaining: 9536136,
                          eta: 42,
                          runtime: 3,
                          delta: 295396,
                          speed: 949624
                  }
                  */
        });
        fs.createReadStream(pathZip)
            .pipe(str)
            .pipe(unzipper_1.default.Extract({ path: constants_1.ABSOLUTE_PATH_FOLDER_BIN, concurrency: 1 }))
            .promise()
            .then(() => console.log('done'), e => console.log('error', e));
    };
    react_1.default.useMemo(() => {
        if (status === constants_1.Status.LOADING) {
            _unzipFolder().then();
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
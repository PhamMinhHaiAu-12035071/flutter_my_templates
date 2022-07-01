"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressUnzipService = void 0;
const progress_stream_1 = __importDefault(require("progress-stream"));
const fs_1 = __importDefault(require("fs"));
const unzipper_1 = __importDefault(require("unzipper"));
const worker_threads_1 = require("worker_threads");
const constants_1 = require("../constants");
class ProgressUnzipService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
    }
    static getInstance() {
        if (!ProgressUnzipService.instance) {
            ProgressUnzipService.instance = new ProgressUnzipService();
        }
        return ProgressUnzipService.instance;
    }
    unzipFile(source, destination, callback) {
        const worker = new worker_threads_1.Worker(constants_1.WORKER_JS, {
            workerData: {
                value: 15,
                path: constants_1.WORKER_TS,
            },
        });
        worker.on('message', result => {
            console.log(`show result worker: ${result}`);
        });
        const stat = fs_1.default.statSync(source);
        const _progress = (0, progress_stream_1.default)({
            length: stat.size,
            time: 1500 /* ms */,
        }, function (progress) {
            if (callback?.onProgress !== undefined) {
                callback.onProgress(progress);
            }
        });
        fs_1.default.createReadStream(source)
            .pipe(_progress)
            .pipe(unzipper_1.default.Extract({ path: destination, concurrency: 0 }))
            .promise()
            .then(() => {
            if (callback?.onDone !== undefined) {
                callback.onDone();
            }
        }, e => {
            if (callback?.onError !== undefined) {
                callback.onError(e);
            }
        });
    }
}
exports.ProgressUnzipService = ProgressUnzipService;
//# sourceMappingURL=progress_unzip.service.js.map
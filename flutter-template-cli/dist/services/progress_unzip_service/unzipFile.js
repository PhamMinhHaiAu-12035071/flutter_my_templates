"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const fs_1 = __importDefault(require("fs"));
const progress_stream_1 = __importDefault(require("progress-stream"));
const unzipper_1 = __importDefault(require("unzipper"));
const index_1 = require("./index");
function unzipFile(source, destination) {
    const stateInitial = {
        status: index_1.Status.INITIAL,
    };
    worker_threads_1.parentPort?.postMessage(stateInitial);
    const stat = fs_1.default.statSync(source);
    const _progress = (0, progress_stream_1.default)({
        length: stat.size,
        time: 1500 /* ms */,
    }, function (progress) {
        const stateProgress = {
            status: index_1.Status.PROGRESS,
            progress: progress,
        };
        worker_threads_1.parentPort?.postMessage(stateProgress);
    });
    fs_1.default.createReadStream(source)
        .pipe(_progress)
        .pipe(unzipper_1.default.Extract({ path: destination, concurrency: 1 }))
        .promise()
        .then(() => {
        const stateSuccess = {
            status: index_1.Status.SUCCESS,
            message: 'Completed',
        };
        worker_threads_1.parentPort?.postMessage(stateSuccess);
    }, e => {
        const stateError = {
            status: index_1.Status.ERROR,
            error: e,
        };
        worker_threads_1.parentPort?.postMessage(stateError);
    });
}
unzipFile(worker_threads_1.workerData.source, worker_threads_1.workerData.destination);
//# sourceMappingURL=unzipFile.js.map
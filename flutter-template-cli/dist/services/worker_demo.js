"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const fs_1 = __importDefault(require("fs"));
const progress_stream_1 = __importDefault(require("progress-stream"));
const unzipper_1 = __importDefault(require("unzipper"));
function unzipFile(source, destination) {
    const stat = fs_1.default.statSync(source);
    const _progress = (0, progress_stream_1.default)({
        length: stat.size,
        time: 1500 /* ms */,
    }, function (progress) {
        worker_threads_1.parentPort?.postMessage(progress);
    });
    fs_1.default.createReadStream(source)
        .pipe(_progress)
        .pipe(unzipper_1.default.Extract({ path: destination, concurrency: 1 }))
        .promise()
        .then(() => {
        console.log(`done`);
    }, e => {
        console.log(`error ${e}`);
    });
}
unzipFile(worker_threads_1.workerData.source, worker_threads_1.workerData.destination);
//# sourceMappingURL=worker_demo.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressUnzipService = void 0;
const worker_threads_1 = require("worker_threads");
const lodash_1 = __importDefault(require("lodash"));
const index_1 = require("./index");
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
    unzipFile(source, destination, _callback) {
        const worker = new worker_threads_1.Worker('./source/services/progress_unzip_service/unzipFileMain.js', {
            workerData: {
                source: source,
                destination: destination,
                path: './unzipFile.ts',
            },
        });
        worker.on('message', result => {
            const status = lodash_1.default.get(result, 'status');
            switch (status) {
                case index_1.Status.INITIAL:
                    if (_callback?.onInit !== undefined) {
                        _callback.onInit();
                    }
                    break;
                case index_1.Status.PROGRESS:
                    if (_callback?.onProgress !== undefined) {
                        _callback.onProgress(lodash_1.default.get(result, 'progress'));
                    }
                    break;
                case index_1.Status.SUCCESS:
                    if (_callback?.onSuccess !== undefined) {
                        _callback.onSuccess();
                    }
                    break;
                case index_1.Status.ERROR:
                    if (_callback?.onError !== undefined) {
                        _callback.onError(lodash_1.default.get(result, 'error'));
                    }
                    break;
            }
        });
    }
}
exports.ProgressUnzipService = ProgressUnzipService;
//# sourceMappingURL=progress_unzip.service.js.map
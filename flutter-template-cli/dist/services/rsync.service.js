"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsyncService = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Rsync = require('rsync');
class RsyncService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
    }
    static getInstance() {
        if (!RsyncService.instance) {
            RsyncService.instance = new RsyncService();
        }
        return RsyncService.instance;
    }
    validateProgressData(first, second, third, fourth) {
        const conditionFirst = /^\d+$/gm.test(first);
        const conditionSecond = second.charAt(second.length - 1) !== '%';
        const conditionThird = third.charAt(third.length - 1) !== 's' || third.charAt(third.length - 2) !== '/';
        const conditionFourth = /\d\d:\d\d$/gm.test(fourth);
        return !(!conditionFirst || conditionSecond || conditionThird || !conditionFourth);
    }
    parseProgressData(data) {
        const arr = lodash_1.default.compact(data.split(/\s+/));
        if (arr.length >= 4) {
            const first = arr[0];
            const second = arr[1];
            const third = arr[2];
            const fourth = arr[3];
            if (first !== undefined &&
                second !== undefined &&
                third !== undefined &&
                fourth !== undefined) {
                const checked = RsyncService.getInstance().validateProgressData(first, second, third, fourth);
                if (checked) {
                    return {
                        'Total Size': `${parseInt(first)} Bytes`,
                        Progress: `${parseInt(second)}%`,
                        'Speed Up': third,
                        'Estimate Time': fourth,
                    };
                }
            }
        }
        return undefined;
    }
    copyFile(source, destination, rsyncCallback) {
        // Build the command
        const rsync = new Rsync()
            .shell('ssh')
            .flags('azv')
            .progress()
            .source(source)
            .destination(destination);
        // Execute the command
        rsync.execute(function (error, code, cmd) {
            if (rsyncCallback?.onDone !== undefined) {
                rsyncCallback.onDone(error, code, cmd);
            }
        }, function (data) {
            if (rsyncCallback?.onProgress !== undefined) {
                const output = String.fromCharCode.apply(null, data);
                const result = RsyncService.getInstance().parseProgressData(output);
                rsyncCallback.onProgress(result);
            }
        }, function (data) {
            if (rsyncCallback?.onError !== undefined) {
                rsyncCallback.onError(data);
            }
        });
    }
}
exports.RsyncService = RsyncService;

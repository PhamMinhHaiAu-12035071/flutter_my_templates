"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rsyncHelper = void 0;
const Rsync = require('rsync');
const rsyncHelper = (source, destination, rsyncCallback) => {
    // Build the command
    const rsync = new Rsync()
        .shell('ssh')
        .flags('azv')
        .progress()
        .source(source)
        .destination(destination);
    // Execute the command
    rsync.execute(function (error, code, cmd) {
        if (rsyncCallback.onDone !== undefined) {
            rsyncCallback.onDone(error, code, cmd);
        }
    }, function (data) {
        if (rsyncCallback.onProgress !== undefined) {
            rsyncCallback.onProgress(data);
        }
    }, function (data) {
        if (rsyncCallback.onError !== undefined) {
            rsyncCallback.onError(data);
        }
    });
};
exports.rsyncHelper = rsyncHelper;

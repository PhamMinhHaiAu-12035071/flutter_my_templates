"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSpinner = exports.folderSpinner = exports.errorSpinner = exports.warningSpinner = exports.checkedSpinner = void 0;
const checkedSpinner = {
    interval: 100,
    frames: ['✅'],
};
exports.checkedSpinner = checkedSpinner;
const warningSpinner = {
    interval: 100,
    frames: ['⚠️'],
};
exports.warningSpinner = warningSpinner;
const errorSpinner = {
    interval: 100,
    frames: ['❗️'],
};
exports.errorSpinner = errorSpinner;
const folderSpinner = {
    interval: 100,
    frames: ['📂'],
};
exports.folderSpinner = folderSpinner;
const fileSpinner = {
    interval: 100,
    frames: ['📝'],
};
exports.fileSpinner = fileSpinner;
//# sourceMappingURL=spinners.js.map
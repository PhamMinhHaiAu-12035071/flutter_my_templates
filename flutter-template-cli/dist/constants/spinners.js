"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorSpinner = exports.warningSpinner = exports.checkedSpinner = void 0;
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
//# sourceMappingURL=spinners.js.map
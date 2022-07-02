"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUnzipExecuteTimeError = exports.selectUnzipExecuteTimeSuccess = exports.selectUnzipProgress = exports.selectUnzipStatus = exports.setError = exports.setSuccess = exports.setProgress = exports.setUnzipLoading = void 0;
const constants_1 = require("../../constants");
const toolkit_1 = require("@reduxjs/toolkit");
const KEY = 'unzipSlice';
const initialState = {
    status: constants_1.Status.INITIAL,
    errors: undefined,
    datedInitial: Date.now(),
    datedSuccess: undefined,
    datedError: undefined,
    datedLoading: undefined,
    messages: '',
    data: '',
    progress: [],
};
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setUnzipLoading(state) {
            state.status = constants_1.Status.LOADING;
            state.errors = undefined;
            state.datedLoading = Date.now();
        },
        setProgress(state, action) {
            state.errors = undefined;
            state.progress = [...state.progress, action.payload];
        },
        setSuccess(state) {
            state.status = constants_1.Status.SUCCESS;
            state.errors = undefined;
            state.datedSuccess = Date.now();
        },
        setError(state, action) {
            state.status = constants_1.Status.ERROR;
            state.errors = [].concat(action.payload);
            state.datedError = Date.now();
        },
    },
});
_a = slice.actions, exports.setUnzipLoading = _a.setUnzipLoading, exports.setProgress = _a.setProgress, exports.setSuccess = _a.setSuccess, exports.setError = _a.setError;
exports.default = slice.reducer;
const selectUnzipStatus = (state) => {
    return state.unzip.status;
};
exports.selectUnzipStatus = selectUnzipStatus;
const selectUnzipProgress = (state) => {
    return state.unzip.progress;
};
exports.selectUnzipProgress = selectUnzipProgress;
const selectUnzipExecuteTimeSuccess = (state) => {
    if (state.unzip.datedSuccess !== undefined && state.unzip.datedLoading !== undefined) {
        const time = (state.unzip.datedSuccess - state.unzip.datedLoading) / 1000;
        return `${time}s`;
    }
    return '';
};
exports.selectUnzipExecuteTimeSuccess = selectUnzipExecuteTimeSuccess;
const selectUnzipExecuteTimeError = (state) => {
    if (state.unzip.datedError !== undefined && state.unzip.datedLoading !== undefined) {
        const time = (state.unzip.datedError - state.unzip.datedLoading) / 1000;
        return `${time}s`;
    }
    return '';
};
exports.selectUnzipExecuteTimeError = selectUnzipExecuteTimeError;
//# sourceMappingURL=unzipSlice.js.map
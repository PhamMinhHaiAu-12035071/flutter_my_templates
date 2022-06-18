"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectRelativePath = exports.selectPathExecuteTimeSuccess = exports.selectPathErrors = exports.selectPathStatus = exports.setPathLoading = exports.setPathFailed = exports.setPathSuccess = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const constants_1 = require("../../constants");
const KEY = 'path';
const initialState = {
    relativePath: '',
    status: constants_1.Status.INITIAL,
    errors: undefined,
    datedInitial: Date.now(),
    datedSuccess: undefined,
    datedError: undefined,
    datedLoading: undefined,
};
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setPathSuccess(state, action) {
            state.relativePath = action.payload;
            state.errors = undefined;
            state.status = constants_1.Status.SUCCESS;
            state.datedSuccess = Date.now();
        },
        setPathFailed(state, action) {
            state.data = '';
            state.errors = action.payload;
            state.status = constants_1.Status.ERROR;
        },
        setPathLoading(state) {
            state.data = '';
            state.errors = undefined;
            state.status = constants_1.Status.LOADING;
            state.datedLoading = Date.now();
        },
    },
});
_a = slice.actions, exports.setPathSuccess = _a.setPathSuccess, exports.setPathFailed = _a.setPathFailed, exports.setPathLoading = _a.setPathLoading;
exports.default = slice.reducer;
const selectPathStatus = (state) => state.path.status;
exports.selectPathStatus = selectPathStatus;
const selectPathErrors = (state) => state.path.errors;
exports.selectPathErrors = selectPathErrors;
const selectPathExecuteTimeSuccess = (state) => {
    if (state.path.datedSuccess !== undefined && state.path.datedLoading !== undefined) {
        const time = (state.path.datedSuccess - state.path.datedLoading) / 1000;
        return `${time}s`;
    }
    return '';
};
exports.selectPathExecuteTimeSuccess = selectPathExecuteTimeSuccess;
const selectRelativePath = (state) => {
    return state.path.relativePath;
};
exports.selectRelativePath = selectRelativePath;

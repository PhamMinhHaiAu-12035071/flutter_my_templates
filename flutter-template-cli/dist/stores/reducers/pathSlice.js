"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPathData = exports.selectRelativePath = exports.selectPathExecuteTimeSuccess = exports.selectPathErrors = exports.selectPathStatus = exports.setPath = exports.setPathLoading = exports.setPathFailed = exports.setPathSuccess = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const constants_1 = require("../../constants");
const KEY = 'path';
const initialState = {
    data: '',
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
            state.data = action.payload;
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
        setPath(state, action) {
            if (state.status === constants_1.Status.INITIAL || state.status === constants_1.Status.ERROR) {
                state.data = action.payload;
            }
        },
    },
});
_a = slice.actions, exports.setPathSuccess = _a.setPathSuccess, exports.setPathFailed = _a.setPathFailed, exports.setPathLoading = _a.setPathLoading, exports.setPath = _a.setPath;
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
const selectPathData = (state) => state.path.data;
exports.selectPathData = selectPathData;
//# sourceMappingURL=pathSlice.js.map
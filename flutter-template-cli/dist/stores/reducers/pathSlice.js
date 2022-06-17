"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPathErrors = exports.selectPathStatus = exports.setEmptyError = exports.setPathLoading = exports.setPathFailed = exports.setPathSuccess = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const constants_1 = require("../../constants");
const KEY = 'path';
var StatusPath;
(function (StatusPath) {
    StatusPath["KEY_PRESS"] = "KEY_PRESS";
})(StatusPath || (StatusPath = {}));
const initialState = { data: '', status: constants_1.Status.INITIAL, errors: undefined };
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setPathSuccess(state, action) {
            state.data = action.payload;
            state.errors = undefined;
            state.status = constants_1.Status.SUCCESS;
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
        },
        setEmptyError(state) {
            state.data = '';
            state.errors = undefined;
            state.status = StatusPath.KEY_PRESS;
        },
    },
});
_a = slice.actions, exports.setPathSuccess = _a.setPathSuccess, exports.setPathFailed = _a.setPathFailed, exports.setPathLoading = _a.setPathLoading, exports.setEmptyError = _a.setEmptyError;
exports.default = slice.reducer;
const selectPathStatus = (state) => state.path.status;
exports.selectPathStatus = selectPathStatus;
const selectPathErrors = (state) => state.path.errors;
exports.selectPathErrors = selectPathErrors;

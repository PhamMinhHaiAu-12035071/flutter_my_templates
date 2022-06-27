"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPathData = exports.selectRelativePath = exports.selectPathExecuteTimeSuccess = exports.selectPathErrors = exports.selectPathStatus = exports.setStatusKeyDown = exports.setPathAutocomplete = exports.setPath = exports.setPathLoading = exports.setPathFailed = exports.setPathSuccess = exports.StatusPathCombine = exports.PathStatusError = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const constants_1 = require("../../constants");
const KEY = 'path';
var PathStatusError;
(function (PathStatusError) {
    PathStatusError["ERROR_KEYDOWN"] = "ERROR_KEYDOWN";
    PathStatusError["KEY_DOWN"] = "KEY_DOWN";
    PathStatusError["AUTOCOMPLETE"] = "AUTOCOMPLETE";
})(PathStatusError = exports.PathStatusError || (exports.PathStatusError = {}));
exports.StatusPathCombine = { ...constants_1.Status, ...PathStatusError };
const initialState = {
    data: '',
    relativePath: '',
    status: exports.StatusPathCombine.INITIAL,
    errors: undefined,
    datedInitial: Date.now(),
    datedSuccess: undefined,
    datedError: undefined,
    datedLoading: undefined,
    messages: '',
};
const LIST_CHARACTER_DENIED = [':', '`'];
const _validateStringValid = (str) => {
    const size = str.length;
    for (let i = 0; i < size; i++) {
        if (LIST_CHARACTER_DENIED.some(item => item === str.charAt(i))) {
            return false;
        }
    }
    return true;
};
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setPathSuccess(state, action) {
            state.relativePath = action.payload;
            state.data = action.payload;
            state.errors = undefined;
            state.status = exports.StatusPathCombine.INITIAL;
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
            state.status = exports.StatusPathCombine.LOADING;
            state.datedLoading = Date.now();
        },
        setPath(state, action) {
            const checkedValid = _validateStringValid(action.payload);
            if (!checkedValid) {
                const error = {
                    type: 'notValid',
                    field: 'path',
                    message: "Character valid is not include '`' or ':'",
                };
                state.errors = [error];
                state.status = exports.StatusPathCombine.ERROR_KEYDOWN;
                state.data = action.payload;
            }
            if (state.status === exports.StatusPathCombine.INITIAL ||
                state.status === exports.StatusPathCombine.ERROR ||
                checkedValid) {
                state.errors = undefined;
                state.data = action.payload;
                state.status = exports.StatusPathCombine.KEY_DOWN;
            }
        },
        setPathAutocomplete(state, action) {
            state.errors = undefined;
            state.data = action.payload;
            state.status = exports.StatusPathCombine.AUTOCOMPLETE;
        },
        setStatusKeyDown(state) {
            state.status = exports.StatusPathCombine.KEY_DOWN;
        },
    },
});
_a = slice.actions, exports.setPathSuccess = _a.setPathSuccess, exports.setPathFailed = _a.setPathFailed, exports.setPathLoading = _a.setPathLoading, exports.setPath = _a.setPath, exports.setPathAutocomplete = _a.setPathAutocomplete, exports.setStatusKeyDown = _a.setStatusKeyDown;
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
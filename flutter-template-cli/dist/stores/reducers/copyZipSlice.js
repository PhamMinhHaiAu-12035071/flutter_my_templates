"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectProgressCopyZipFlutter = exports.selectCopyZipFlutterExecuteTimeSuccess = exports.selectCopyZipFlutterStatus = exports.setProgress = exports.setCopyZipFlutterSuccess = exports.setCopyZipFlutterLoading = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const constants_1 = require("../../constants");
const KEY = 'createZipSlice';
const initialState = {
    status: constants_1.Status.INITIAL,
    errors: undefined,
    datedInitial: Date.now(),
    datedSuccess: undefined,
    datedError: undefined,
    datedLoading: undefined,
    progress: [],
};
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setCopyZipFlutterLoading(state) {
            state.status = constants_1.Status.LOADING;
            state.errors = undefined;
            state.datedLoading = Date.now();
            state.progress = [];
        },
        setCopyZipFlutterSuccess(state, action) {
            state.status = constants_1.Status.SUCCESS;
            state.errors = undefined;
            state.data = action.payload;
            state.datedSuccess = Date.now();
            state.progress = [];
        },
        setProgress(state, action) {
            state.errors = undefined;
            state.progress = state.progress.concat(action.payload);
        },
    },
});
_a = slice.actions, exports.setCopyZipFlutterLoading = _a.setCopyZipFlutterLoading, exports.setCopyZipFlutterSuccess = _a.setCopyZipFlutterSuccess, exports.setProgress = _a.setProgress;
exports.default = slice.reducer;
const selectCopyZipFlutterStatus = (state) => state.copyZipFlutter.status;
exports.selectCopyZipFlutterStatus = selectCopyZipFlutterStatus;
const selectCopyZipFlutterExecuteTimeSuccess = (state) => {
    if (state.copyZipFlutter.datedSuccess !== undefined &&
        state.copyZipFlutter.datedLoading !== undefined) {
        const time = (state.copyZipFlutter.datedSuccess - state.copyZipFlutter.datedLoading) / 1000;
        return `${time}s`;
    }
    return '';
};
exports.selectCopyZipFlutterExecuteTimeSuccess = selectCopyZipFlutterExecuteTimeSuccess;
const selectProgressCopyZipFlutter = (state) => {
    return state.copyZipFlutter.progress;
};
exports.selectProgressCopyZipFlutter = selectProgressCopyZipFlutter;

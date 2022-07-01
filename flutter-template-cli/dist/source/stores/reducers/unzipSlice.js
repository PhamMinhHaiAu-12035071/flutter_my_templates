"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUnzipProgress = exports.selectUnzipStatus = exports.setProgress = exports.setUnzipLoading = void 0;
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
    },
});
_a = slice.actions, exports.setUnzipLoading = _a.setUnzipLoading, exports.setProgress = _a.setProgress;
exports.default = slice.reducer;
const selectUnzipStatus = (state) => {
    return state.unzip.status;
};
exports.selectUnzipStatus = selectUnzipStatus;
const selectUnzipProgress = (state) => {
    return state.unzip.progress;
};
exports.selectUnzipProgress = selectUnzipProgress;
//# sourceMappingURL=unzipSlice.js.map
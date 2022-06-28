"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUnzipStatus = exports.setUnzipLoading = void 0;
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
    },
});
exports.setUnzipLoading = slice.actions.setUnzipLoading;
exports.default = slice.reducer;
const selectUnzipStatus = (state) => {
    return state.unzip.status;
};
exports.selectUnzipStatus = selectUnzipStatus;
//# sourceMappingURL=unzipSlice.js.map
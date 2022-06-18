"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCreateFolderExecuteTimeSuccess = exports.selectCreateFolderStatus = exports.setCreateFolderExists = exports.setCreateFolderSuccess = exports.setCreateFolderLoading = exports.StatusFolder = void 0;
const constants_1 = require("../../constants");
const toolkit_1 = require("@reduxjs/toolkit");
const KEY = 'createFolderBin';
var StatusFolder;
(function (StatusFolder) {
    StatusFolder["PATH_FOLDER_EXISTS"] = "PATH_FOLDER_EXISTS";
})(StatusFolder = exports.StatusFolder || (exports.StatusFolder = {}));
const initialState = {
    status: constants_1.Status.INITIAL,
    errors: undefined,
    datedLoading: undefined,
    datedSuccess: undefined,
    datedInitial: Date.now(),
    datedError: undefined,
};
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setCreateFolderLoading(state) {
            state.status = constants_1.Status.LOADING;
            state.errors = undefined;
            state.datedLoading = Date.now();
        },
        setCreateFolderSuccess(state) {
            state.status = constants_1.Status.SUCCESS;
            state.errors = undefined;
            state.datedSuccess = Date.now();
        },
        setCreateFolderExists(state) {
            state.status = StatusFolder.PATH_FOLDER_EXISTS;
            state.errors = undefined;
            state.datedSuccess = Date.now();
        },
    },
});
_a = slice.actions, exports.setCreateFolderLoading = _a.setCreateFolderLoading, exports.setCreateFolderSuccess = _a.setCreateFolderSuccess, exports.setCreateFolderExists = _a.setCreateFolderExists;
exports.default = slice.reducer;
const selectCreateFolderStatus = (state) => state.createFolder.status;
exports.selectCreateFolderStatus = selectCreateFolderStatus;
const selectCreateFolderExecuteTimeSuccess = (state) => {
    if (state.createFolder.datedSuccess !== undefined && state.createFolder.datedLoading) {
        const time = (state.createFolder?.datedSuccess - state.createFolder?.datedLoading) / 1000;
        return `${time}s`;
    }
    return '';
};
exports.selectCreateFolderExecuteTimeSuccess = selectCreateFolderExecuteTimeSuccess;

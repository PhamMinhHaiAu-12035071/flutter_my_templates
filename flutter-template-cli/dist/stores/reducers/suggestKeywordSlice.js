"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSuggestKeywordData = exports.selectSuggestKeywordStatus = exports.setSuggestKeywordSuccess = exports.setSuggestKeywordLoading = void 0;
const constants_1 = require("../../constants");
const toolkit_1 = require("@reduxjs/toolkit");
const KEY = 'suggestKeywordSlice';
const initialState = {
    status: constants_1.Status.INITIAL,
    errors: undefined,
    datedInitial: Date.now(),
    datedSuccess: undefined,
    datedError: undefined,
    datedLoading: undefined,
    messages: '',
    data: [],
};
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setSuggestKeywordLoading(state) {
            state.status = constants_1.Status.LOADING;
            state.errors = undefined;
            state.datedLoading = Date.now();
        },
        setSuggestKeywordSuccess(state, action) {
            state.status = constants_1.Status.SUCCESS;
            state.errors = undefined;
            state.datedSuccess = Date.now();
            state.data = action.payload.filter(item => item.name !== '');
            state.messages = 'get suggest keyword success';
        },
    },
});
_a = slice.actions, exports.setSuggestKeywordLoading = _a.setSuggestKeywordLoading, exports.setSuggestKeywordSuccess = _a.setSuggestKeywordSuccess;
exports.default = slice.reducer;
const selectSuggestKeywordStatus = (state) => {
    return state.suggestKeyword.status;
};
exports.selectSuggestKeywordStatus = selectSuggestKeywordStatus;
const selectSuggestKeywordData = (state) => {
    return state.suggestKeyword.data;
};
exports.selectSuggestKeywordData = selectSuggestKeywordData;
//# sourceMappingURL=suggestKeywordSlice.js.map
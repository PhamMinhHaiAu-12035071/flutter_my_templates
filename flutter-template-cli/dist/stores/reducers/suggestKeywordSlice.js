"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSuggestKeywordActiveData = exports.selectSuggestKeywordCurrentPath = exports.selectSuggestKeywordData = exports.selectSuggestKeywordStatus = exports.setSuggestKeywordChooseTab = exports.setSuggestKeywordSuccess = exports.setSuggestKeywordLoading = exports.StatusSuggestKeywordCombine = exports.SuggestKeywordStatus = void 0;
const constants_1 = require("../../constants");
const toolkit_1 = require("@reduxjs/toolkit");
const KEY = 'suggestKeywordSlice';
var SuggestKeywordStatus;
(function (SuggestKeywordStatus) {
    SuggestKeywordStatus["CHOOSE_TAB"] = "CHOOSE_TAB";
})(SuggestKeywordStatus = exports.SuggestKeywordStatus || (exports.SuggestKeywordStatus = {}));
exports.StatusSuggestKeywordCombine = { ...constants_1.Status, ...SuggestKeywordStatus };
const initialState = {
    status: exports.StatusSuggestKeywordCombine.INITIAL,
    errors: undefined,
    datedInitial: Date.now(),
    datedSuccess: undefined,
    datedError: undefined,
    datedLoading: undefined,
    messages: '',
    data: [],
    currentPath: undefined,
    indexTab: -1,
};
const slice = (0, toolkit_1.createSlice)({
    name: KEY,
    initialState: initialState,
    reducers: {
        setSuggestKeywordLoading(state, action) {
            state.status = exports.StatusSuggestKeywordCombine.LOADING;
            state.errors = undefined;
            state.datedLoading = Date.now();
            state.currentPath = action.payload;
        },
        setSuggestKeywordSuccess(state, action) {
            state.status = exports.StatusSuggestKeywordCombine.SUCCESS;
            state.errors = undefined;
            state.datedSuccess = Date.now();
            state.data = action.payload.filter(item => item.name !== '');
            state.messages = 'get suggest keyword success';
        },
        setSuggestKeywordChooseTab(state) {
            state.status = exports.StatusSuggestKeywordCombine.CHOOSE_TAB;
            state.errors = undefined;
            if (state.indexTab === state.data.length - 1) {
                state.indexTab = 0;
            }
            else {
                state.indexTab = state.indexTab + 1;
            }
            state.data = state.data.map((item, index) => index === state.indexTab
                ? { ...item, ...{ isActive: true } }
                : { ...item, ...{ isActive: false } });
        },
    },
});
_a = slice.actions, exports.setSuggestKeywordLoading = _a.setSuggestKeywordLoading, exports.setSuggestKeywordSuccess = _a.setSuggestKeywordSuccess, exports.setSuggestKeywordChooseTab = _a.setSuggestKeywordChooseTab;
exports.default = slice.reducer;
const selectSuggestKeywordStatus = (state) => {
    return state.suggestKeyword.status;
};
exports.selectSuggestKeywordStatus = selectSuggestKeywordStatus;
const selectSuggestKeywordData = (state) => {
    return state.suggestKeyword.data;
};
exports.selectSuggestKeywordData = selectSuggestKeywordData;
const selectSuggestKeywordCurrentPath = (state) => {
    return state.suggestKeyword.currentPath;
};
exports.selectSuggestKeywordCurrentPath = selectSuggestKeywordCurrentPath;
const selectSuggestKeywordActiveData = (state) => {
    if (state.suggestKeyword.status === exports.StatusSuggestKeywordCombine.CHOOSE_TAB) {
        return state.suggestKeyword.data[state.suggestKeyword.indexTab];
    }
    return undefined;
};
exports.selectSuggestKeywordActiveData = selectSuggestKeywordActiveData;
//# sourceMappingURL=suggestKeywordSlice.js.map
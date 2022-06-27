"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSuggestKeywordActiveData = exports.selectSuggestKeywordCurrentPath = exports.selectSuggestKeywordData = exports.selectSuggestKeywordStatus = exports.setInitialData = exports.setCurrentPath = exports.setSuggestKeywordChooseTab = exports.setSuggestKeywordSuccess = exports.setSuggestKeywordLoading = exports.StatusSuggestKeywordCombine = exports.SuggestKeywordStatus = void 0;
const constants_1 = require("../../constants");
const toolkit_1 = require("@reduxjs/toolkit");
const KEY = 'suggestKeywordSlice';
var SuggestKeywordStatus;
(function (SuggestKeywordStatus) {
    SuggestKeywordStatus["CHOOSE_TAB"] = "CHOOSE_TAB";
    SuggestKeywordStatus["EMPTY_DATA"] = "EMPTY_DATA";
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
        setCurrentPath(state, action) {
            state.currentPath = action.payload;
        },
        setSuggestKeywordLoading(state, action) {
            state.status = exports.StatusSuggestKeywordCombine.LOADING;
            state.errors = undefined;
            state.datedLoading = Date.now();
            state.currentPath = action.payload;
        },
        setSuggestKeywordSuccess(state, action) {
            const data = action.payload.filter(item => item.name !== '');
            if (data.length === 0) {
                state.status = exports.StatusSuggestKeywordCombine.EMPTY_DATA;
                state.data = [];
            }
            else {
                state.status = exports.StatusSuggestKeywordCombine.SUCCESS;
                state.data = action.payload.filter(item => item.name !== '');
            }
            state.errors = undefined;
            state.datedSuccess = Date.now();
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
        setInitialData(state) {
            state.status = exports.StatusSuggestKeywordCombine.INITIAL;
            state.errors = undefined;
            state.messages = '';
            state.data = [];
            state.currentPath = undefined;
            state.indexTab = -1;
        },
    },
});
_a = slice.actions, exports.setSuggestKeywordLoading = _a.setSuggestKeywordLoading, exports.setSuggestKeywordSuccess = _a.setSuggestKeywordSuccess, exports.setSuggestKeywordChooseTab = _a.setSuggestKeywordChooseTab, exports.setCurrentPath = _a.setCurrentPath, exports.setInitialData = _a.setInitialData;
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
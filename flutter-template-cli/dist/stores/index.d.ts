export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    path: import("./reducers/pathSlice").PathState;
    createFolder: import("./reducers/createFolderSlice").CreateFolderState;
    copyZipFlutter: import("./reducers/copyZipSlice").CopyFileState;
    suggestKeyword: import("./reducers/suggestKeywordSlice").SuggestKeywordState;
}, import("redux").AnyAction, any[]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;

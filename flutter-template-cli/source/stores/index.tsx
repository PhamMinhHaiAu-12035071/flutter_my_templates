import { configureStore } from '@reduxjs/toolkit';
import pathReducer from './reducers/pathSlice';
import sanitizedConfig from '../constants/configs';
import createFolderReducer from './reducers/createFolderSlice';
import copyZipFlutterReducer from './reducers/copyZipSlice';
import suggestKeywordReducer from './reducers/suggestKeywordSlice';
import unzipReducer from './reducers/unzipSlice';
const middlewares = [];

if (sanitizedConfig.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    path: pathReducer,
    createFolder: createFolderReducer,
    copyZipFlutter: copyZipFlutterReducer,
    suggestKeyword: suggestKeywordReducer,
    unzip: unzipReducer,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

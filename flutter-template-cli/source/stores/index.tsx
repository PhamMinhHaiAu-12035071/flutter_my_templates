import { configureStore } from '@reduxjs/toolkit';
import pathReducer from './reducers/pathSlice';
import config from '../constants/configs';

const middlewares = [];

if (config.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    path: pathReducer,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

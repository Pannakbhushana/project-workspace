// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

const store = configureStore({
  middleware: (getDefMiddleware) => getDefMiddleware({ serializableCheck: false }),
  reducer: {
    sideBar: uiReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

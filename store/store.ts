import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import sortReducer from './sortSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

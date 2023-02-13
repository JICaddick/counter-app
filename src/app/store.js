import { configureStore } from '@reduxjs/toolkit';
// this file is used to create the store. It is the entry point for the redux store.
// We need to import the counterReducer from the counterSlice.js file because we want to use it in the store.
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

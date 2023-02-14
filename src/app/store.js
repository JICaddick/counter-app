import { configureStore } from '@reduxjs/toolkit';
// this file is used to create the store. It is the entry point for the redux store.
// We need to import the counterReducer from the counterSlice.js file because we want to use it in the store.
// the app needs to have at least one reducer. The reducer is a function that takes the current state and an action as arguments, and returns a new state result.It can different reducers for different features.
// We can customize the store by adding middleware and enhancers. several middleware are available in the redux toolkit, out of the box.

import counterReducer from '../features/counter/counterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

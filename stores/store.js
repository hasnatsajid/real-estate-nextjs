import { configureStore } from '@reduxjs/toolkit';

// Importing all reducers
import counterReducer from './slices/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

import {configureStore} from '@reduxjs/toolkit'
import { exerciseReducer } from './slices/exercises';

const store = configureStore(
  {
    reducer: {
      posts: exerciseReducer,
    }
  }
);

export default store;
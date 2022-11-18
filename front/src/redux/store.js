import {configureStore} from '@reduxjs/toolkit'
import { exerciseReducer } from './slices/exercises';

const store = configureStore(
  {
    reducer: {
      exercises: exerciseReducer,
    }
  }
);

export default store;
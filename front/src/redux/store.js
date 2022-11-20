import {configureStore} from '@reduxjs/toolkit'
import { exerciseReducer } from './slices/exercises'
import { mealReducer } from './slices/meals'

const store = configureStore(
  {
    reducer: {
      exercises: exerciseReducer,
      meals: mealReducer
    }
  }
);

export default store;
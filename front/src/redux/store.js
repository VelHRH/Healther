import {configureStore} from '@reduxjs/toolkit'
import { exerciseReducer } from './slices/exercises'
import { mealReducer } from './slices/meals'
import { authReducer } from './slices/auth'

const store = configureStore(
  {
    reducer: {
      exercises: exerciseReducer,
      meals: mealReducer,
      auth: authReducer
    }
  }
);

export default store;
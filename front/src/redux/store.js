import {configureStore} from '@reduxjs/toolkit'
import { exerciseReducer } from './slices/exercises'
import { mealReducer } from './slices/meals'
import { authReducer } from './slices/auth'
import { productReducer } from './slices/products';

const store = configureStore(
  {
    reducer: {
      exercises: exerciseReducer,
      products: productReducer,
      meals: mealReducer,
      auth: authReducer
    }
  }
);

export default store;
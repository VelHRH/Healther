import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  exercises: {
    items: [],
    status: 'loading'
  },
  tags: {
    items: [],
    status: 'loading'
  }
};

const exerciseSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {}
});

export const exerciseReducer = exerciseSlice.reducer;
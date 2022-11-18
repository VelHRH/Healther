import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios';

export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async () => {
  const {data} = await axios.get('/exercises');
  return data;
});

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
  reducers: {},
  extraReducers: {
    [fetchExercises.fulfilled]: (state, action) => {
      state.exercises.items = action.payload;
      state.exercises.status = 'loaded'
    },
    [fetchExercises.rejected]: (state) => {
      state.exercises.items = [];
      state.exercises.status = 'error'
    },
  }
});

export const exerciseReducer = exerciseSlice.reducer;
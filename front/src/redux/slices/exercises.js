import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios';

export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async () => {
  const {data} = await axios.get('/exercises');
  return data;
});

export const fetchRemoveExercises = createAsyncThunk('exercises/fetchRemoveExercises', async (id) => await axios.delete(`/exercises/${id}`));


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
  name: 'exercises',
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
    [fetchRemoveExercises.pending]: (state, action) => {
      state.exercises.items = state.exercises.items.filter(obj => obj._id !== action.meta.args)
    }
  }
});

export const exerciseReducer = exerciseSlice.reducer;
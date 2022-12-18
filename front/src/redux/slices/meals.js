import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
 const { data } = await axios.get("/meals");
 return data;
});

export const fetchRemoveMeals = createAsyncThunk(
 "exercises/fetchRemoveMeals",
 async (id) => await axios.delete(`/meals/${id}`)
);

const initialState = {
 meals: {
  items: [],
  status: "loading",
 },
};

const mealSlice = createSlice({
 name: "meals",
 initialState,
 reducers: {},
 extraReducers: {
  [fetchMeals.fulfilled]: (state, action) => {
   state.meals.items = action.payload;
   state.meals.status = "loaded";
  },
  [fetchMeals.rejected]: (state) => {
   state.meals.items = [];
   state.meals.status = "error";
  },
  [fetchRemoveMeals.pending]: (state, action) => {
   state.meals.items = state.meals.items.filter(
    (obj) => obj._id !== action.meta.args
   );
  },
 },
});

export const mealReducer = mealSlice.reducer;

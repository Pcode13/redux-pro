import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moives/movieSlice"

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
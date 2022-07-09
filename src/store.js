import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./app/ratedSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
});

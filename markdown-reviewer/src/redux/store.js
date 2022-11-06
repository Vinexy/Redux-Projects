import { configureStore } from "@reduxjs/toolkit";
import ReviewSlice from "./ReviewSlice";

export const store = configureStore({
  reducer: {
    reviews: ReviewSlice,
  },
});
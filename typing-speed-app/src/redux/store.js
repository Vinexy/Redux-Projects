import { configureStore } from "@reduxjs/toolkit";
import WordSlice from "./WordSlice";
export const store = configureStore({
  reducer: {
    words: WordSlice,
  },
});

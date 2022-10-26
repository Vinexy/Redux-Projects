import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Products/ProductSlice.js";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

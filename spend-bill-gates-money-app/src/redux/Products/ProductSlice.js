import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    money: 100000000000,
    filteredItems: [],
    totalAmount: 0,
  },
  reducers: {
    loadProduct: (state, action) => {
      state.items = action.payload;
    },
    reduceMoney: (state, action) => {
      state.money = 100000000000;
      state.money-= action.payload;
    },
    filters: (state) => {
      state.filteredItems = state.items.filter(
        (p) => p.count !== "0" && p.count !== ""
      );
    },
  },
});

export const { loadProduct, reduceMoney, addTotalMoney, filters } =
  ProductSlice.actions;

export default ProductSlice.reducer;

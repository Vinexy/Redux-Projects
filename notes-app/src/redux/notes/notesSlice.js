import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: 1,
        text: "ahmet",
        colors: "bg-primary",
      },
      {
        id: 2,
        text: "fatma",
        colors: "bg-success",
      },
      {
        id: 3,
        text: "farma",
        colors: "bg-success",
      },
    ],
    searchText: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    changeSearch: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNote, changeSearch } = notesSlice.actions;

export default notesSlice.reducer;

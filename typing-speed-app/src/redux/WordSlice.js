import { createSlice } from "@reduxjs/toolkit";
import wordJson from "../words.json";

export const WordSlice = createSlice({
  name: "words",
  initialState: {
    wordList: [],
    score: 0,
    trueWordCount: 0,
    wrongWordCount: 0,
    trueHit: 0,
    wrongHit: 0,
  },
  reducers: {
    loadData: (state, action) => {
      state.wordList = action.payload;
      state.wordList = state.wordList.map((word) => {
        return { text: word, status: "wordStyle", condition: false };
      });
      state.wordList[0].condition = true;
    },
    reloadData: (state) => {
      state.wordList = wordJson.data
        .sort(() => 0.5 - Math.random())
        .slice(0, 212);
      state.wordList = state.wordList.map((word) => {
        return { text: word, status: "wordStyle", condition: false };
      });
      state.wordList[0].condition = true;
      state.trueWordCount = 0;
      state.wrongWordCount = 0;
      state.trueHit = 0;
      state.wrongHit = 0;
    },
    trueWord: (state, action) => {
      state.wordList[action.payload].status = "successWord";
      state.wordList[action.payload].condition = false;
      state.wordList[action.payload + 1].condition = true;
      state.trueWordCount++;
      state.trueHit += state.wordList[action.payload].text.length;
    },
    wrongWord: (state, action) => {
      state.wordList[action.payload].status = "failWord";
      state.wordList[action.payload].condition = false;
      state.wordList[action.payload + 1].condition = true;
      state.wrongWordCount++;
      state.wrongHit += state.wordList[action.payload].text.length;
    },
  },
});

export const { loadData, reloadData, trueWord, wrongWord } = WordSlice.actions;

export default WordSlice.reducer;

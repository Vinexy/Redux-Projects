import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData, addChoice, reloadData } from "../redux/WordSlice";
import wordJson from "../words.json";

const Text = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(reloadData());
  },[]);

  const list = useSelector(state=> state.words.wordList)

  return (
    <div className="textArea">
      {list.map((word) => (
        <span className={ word.condition ? `${word.status} gray` : `${word.status}`}>{word.text}</span>
      ))}
    </div>
  );
};

export default Text;

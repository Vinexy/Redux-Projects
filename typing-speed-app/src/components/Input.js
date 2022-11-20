import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { BiRefresh } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { reloadData, trueWord, wrongWord } from "../redux/WordSlice";
import Score from "./Score";

const Input = () => {
  const inputRef = useRef(null);

  const [next, setNext] = useState(0);
  const [starty, setStart] = useState(0);
  const [restart, setRestart] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const wordList = useSelector((state) => state.words.wordList);

  const handleRestart = () => {
    setStart(0);
    dispatch(reloadData());
    setRestart(restart + 1);
    setNext(0);
    setIsOpen(false);
    inputRef.current.value = "";
  };
  const changeText = (texty) => {
    setStart(starty + 1);
    if (texty.target.value.includes(" ")) {
      if (wordList[next].text === texty.target.value.slice(0, -1)) {
        dispatch(trueWord(next));
        setNext(next + 1);
        texty.target.value = "";
      } else if (wordList[next].text !== texty.target.value.slice(0, -1)) {
        dispatch(wrongWord(next));
        setNext(next + 1);
        texty.target.value = "";
      }
    }
  };

  const time = useMemo(() => {
    return Date.now() + 60000;
  }, [restart]);

  return (
    <div className="inputContainer">
      {modalIsOpen && (
        <Score handleRestart={handleRestart} modalIsOpen={modalIsOpen} />
      )}

      <input
        ref={inputRef}
        type="text"
        className="input"
        onChange={(text) => changeText(text)}
      />
      <Countdown
        autoStart={false}
        date={time}
        renderer={({ minutes, seconds, completed, api }) => {
          if (starty === 1) {
            api.start();
          }
          if (completed && starty !== 0) {
            setIsOpen(true);
          } else {
            return (
              <span className="countdown">
                {minutes}:{seconds}
              </span>
            );
          }
        }}
      />
      <Link to="/" className="restartButton" onClick={handleRestart}>
        <BiRefresh className="res" color="white" size={33} />
      </Link>
    </div>
  );
};

export default Input;

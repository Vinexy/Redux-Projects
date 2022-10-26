import React, { useState } from "react";

import "./CreateNote.styles.css";

import { nanoid } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";

function CreateNote() {
  const [color, setColor] = useState("bg-primary");
  const [texty, setTexty] = useState("");

  const dispatch = useDispatch();

  const click = () => {
    if (texty === "") {
      alert("Text can not be empty");
    } else {
      dispatch(addNote({ id: nanoid(), text: texty, colors: color }));
      setTexty("");
    }
  };

  return (
    <div className="textArea">
      <textarea
        type="text"
        className="input-container"
        placeholder="Enter your note here..."
        onChange={(e) => setTexty(e.target.value)}
        value={texty}
      />

      <button
        className="checkbox bg-primary"
        onClick={() => {
          setColor("bg-primary");
        }}
      >
        {color === "bg-primary" && <span>✓</span>}
      </button>
      <button
        className="checkbox bg-warning"
        onClick={() => {
          setColor("bg-warning");
        }}
      >
        {color === "bg-warning" && <span>✓</span>}
      </button>
      <button
        className="checkbox bg-danger"
        onClick={() => {
          setColor("bg-danger");
        }}
      >
        {color === "bg-danger" && <span>✓</span>}
      </button>
      <button
        className="checkbox bg-success"
        onClick={() => {
          setColor("bg-success");
        }}
      >
        {color === "bg-success" && <span>✓</span>}
      </button>
      <button
        className="checkbox bg-info"
        onClick={() => {
          setColor("bg-info");
        }}
      >
        {color === "bg-info" && <span>✓</span>}
      </button>

      <input type="button" className="btnn" value="ADD" onClick={click} />
    </div>
  );
}

export default CreateNote;

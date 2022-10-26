import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import "./NoteList.styles.css";

function NoteList() {
  const items = useSelector((state) => state.notes.items);
  let filteredList = [];
  const searchItem = useSelector((state) => state.notes.searchText);
  filteredList = items;

  filteredList = items.filter((item) => item.text.includes(searchItem));

  return (
    <div className="container">
      {filteredList.map((note) => (
        <span className={`${note.colors} spanList`}>
          <Link to="/list" state={{ from: note.text }} className="linkStyles">
            {" "}
            Note {items.indexOf(note) + 1}{" "}
          </Link>
        </span>
      ))}
    </div>
  );
}

export default NoteList;

import React from "react";
import "./Searchbar.styles.css";

import { useDispatch } from "react-redux";
import { changeSearch } from "../../redux/notes/notesSlice";

function Searchbar() {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch(changeSearch(e.target.value))}
      ></input>
    </div>
  );
}

export default Searchbar;

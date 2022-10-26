import React from "react";

import Header from "../components/Header/Header.js";
import Searchbar from "../components/Searchbar/Searchbar.js";
import CreateNote from "../components/CreateNote/CreateNote.js";
import NoteList from "../components/NoteList/NoteList.js";

const Create = () => {
  return (
    <div>
      <Header />
      <Searchbar />
      <CreateNote />
      <NoteList />
    </div>
  );
};

export default Create;

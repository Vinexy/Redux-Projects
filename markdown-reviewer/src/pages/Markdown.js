import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Reviewer from "../components/Reviewer";

const Markdown = () => {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Input />
        <Reviewer />
      </div>
    </div>
  );
};

export default Markdown;

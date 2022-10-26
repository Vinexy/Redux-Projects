import React from "react";
import { useLocation } from "react-router-dom";

const List = (props) => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <div className="containerList">
      <h1 className="noteHeader">Your Note</h1>
      <i className="textList">{from}</i>
    </div>
  );
};

export default List;

import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

const Reviewer = () => {
  const text = useSelector((state) => state.reviews.text);
  return <ReactMarkdown className="reviewer_container">{text}</ReactMarkdown>;
};

export default Reviewer;

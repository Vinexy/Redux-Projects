import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"
import Header from "./Header";
import EmojiResults from "./EmojiResults";
import SearchInput from "./SearchInput";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test('render header',()=>{
  render(<Header />);
  const headerText = screen.getByText("Emoji Search");
  expect(headerText).toBeInTheDocument();
});

test('render list',()=>{
  const {container} = render(<App />);
  const items=container.getElementsByClassName("info");
  expect(items.length).toEqual(20)
});

test("input rerender",()=>{

  render(<App />);
  const inp = screen.getByPlaceholderText("");
   userEvent.type(inp,"Sm");
  const comeInput = screen.getByText("Smile");
  expect(comeInput).toBeInTheDocument();
})

test("Copy Emoji",()=>{
  const {container} = render(<App />);
  const cpy =container.getElementsByClassName("component-emoji-result-row copy-to-clipboard");
  expect(cpy[0]).toHaveAttribute("data-clipboard-text");

})
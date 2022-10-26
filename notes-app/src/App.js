import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Create from "./pages/Create.js";
import List from "./pages/List.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;

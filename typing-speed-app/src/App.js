import './App.css';
import MainPage from './pages/MainPage';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;

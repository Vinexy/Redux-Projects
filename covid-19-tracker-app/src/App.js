import './App.css';
import Header from './components/Header';
import Statistic from './components/Statistic';
import Dropdown from './components/Dropdown';
import Chart from './components/Chart';
function App() {
  return (
    <div className="App">
      <Header />
      <Statistic />
      <Dropdown />
      <Chart />
    </div>
  );
}

export default App;

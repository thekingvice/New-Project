import "./App.css";
import Counter from "./Components/Counter/Counter";
import Carrousel from "./Components/Carrousel/Carrousel";
import Accordian from "./Components/Accordian/Accordian";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

function App() {
  return (
    <div className="App">
      <Counter />
      <Carrousel />
      <Accordian />
      <ProgressBar />
    </div>
  );
}

export default App;

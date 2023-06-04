import "./App.css";
import Counter from "./Components/Counter/Counter";
import Carrousel from "./Components/Carrousel/Carrousel";
import Accordian from "./Components/Accordian/Accordian";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import ToolTip from "./ToolTip/ToolTip";

function App() {
  return (
    <div className="App">
      <Counter />
      <ProgressBar />
      <Carrousel />
      <Accordian />
      <ToolTip />
    </div>
  );
}

export default App;

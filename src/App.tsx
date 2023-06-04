import "./App.css";
import Counter from "./Components/Counter/Counter";
import Carrousel from "./Components/Carrousel/Carrousel";
import Accordian from "./Components/Accordian/Accordian";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import ToolTip from "./Components/ToolTip/ToolTip";
import Popup from "./Components/Popup/Popup";

function App() {
  return (
    <div className="App">
      <Counter />
      <ProgressBar />
      <Carrousel />
      <Accordian />
      <ToolTip />
      <Popup />
    </div>
  );
}

export default App;

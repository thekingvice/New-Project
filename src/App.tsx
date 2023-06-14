import "./App.css";
import Counter from "./Components/Counter/Counter";
import Carrousel from "./Components/Carrousel/Carrousel";
import Accordian from "./Components/Accordian/Accordian";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import ToolTip from "./Components/ToolTip/ToolTip";
import Popup from "./Components/Popup/Popup";
import Dropdown from "./Components/Dropdown/Dropdown";
import Tabs from "./Components/Tabs/Tabs";
import RadioButtons from "./Components/RadioButtons/RadioButtons";
import ToggleSwitch from "./Components/Toggle Switch/ToggleSwitch";
import InputValidation from "./InputValidation/InputValidation";

function App() {
  return (
    <div className="App">
      <Counter />
      <ProgressBar />
      <Carrousel />
      <Accordian />
      <ToolTip />
      <Popup />
      <Dropdown />
      <Tabs />
      <RadioButtons />
      <ToggleSwitch />
      <InputValidation />
    </div>
  );
}

export default App;

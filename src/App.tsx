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
import InputValidation from "./Components/InputValidation/InputValidation";
import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu";

function App() {
  return (
    <div className="App">
      <nav className="Navigation">
        <div className="mobile-menu">
          <img
            className="menu-icon"
            src="/hamburger_menu_images/close.svg"
            alt=""
          />
          <a href="" className="option">
            Home
          </a>
          <a href="" className="option">
            About
          </a>
          <a href="" className="option">
            Social
          </a>
        </div>
        <img
          className="hamburger"
          src="/hamburger_menu_images/hamburger-menu.svg"
          alt="menu"
        />
      </nav>
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
      {/* <HamburgerMenu /> */}
    </div>
  );
}

export default App;

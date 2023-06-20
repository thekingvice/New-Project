import "./App.css";
// import { useState } from "react";
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
  // const [isOpen, setIsOpen] = useState(false);

  // function toggleMenu() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="App">
      {/* <nav className="HamburgerMenu">
        <img
          className="HamburgerMenu__icon"
          src="/hamburger_menu_images/hamburger-menu.svg"
          alt="menu"
          onClick={toggleMenu}
          style={{ visibility: isOpen ? "hidden" : "visible" }}
        />
        <div
          className="HamburgerMenu__mobile-menu"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <img
            className="HamburgerMenu__close-icon"
            src="/hamburger_menu_images/close.svg"
            alt="close-icon"
            onClick={toggleMenu}
          />
          <a href="" className="HamburgerMenu__option">
            Home
          </a>
          <a href="" className="HamburgerMenu__option">
            About
          </a>
          <a href="" className="HamburgerMenu__option">
            Social
          </a>
        </div>
      </nav> */}
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
      <HamburgerMenu />
    </div>
  );
}

export default App;

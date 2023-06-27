import "./App.css";
import { useState } from "react";
import "animate.css/animate.compat.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
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
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <nav className="App__nav">
        <img
          className="App__nav-menu-icon"
          src="/hamburger_menu_images/hamburger-menu.svg"
          alt="menu"
          onClick={toggleMenu}
          style={{ visibility: isOpen ? "hidden" : "visible" }}
        />
        <div
          className="App__nav-menu"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <img
            className="App__nav-mobile-menu-icon-close"
            src="/hamburger_menu_images/close.svg"
            alt="close-icon"
            onClick={toggleMenu}
          />
          <a href="" className="App__nav-menu-option">
            Home
          </a>
          <a href="" className="App__nav-menu-option">
            About
          </a>
          <a href="" className="App__nav-menu-option">
            Social
          </a>
        </div>
      </nav>

      <section
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="ScrollDown ">Scroll Down</div>
      </section>

      {/* animate__animated animate__shakeY */}
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <Counter />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <ProgressBar />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <Carrousel />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <Accordian />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <ToolTip />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <Popup />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <Dropdown />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <Tabs />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <RadioButtons />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <ToggleSwitch />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <InputValidation />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
        <HamburgerMenu />
      </ScrollAnimation>
    </div>
  );
}

export default App;

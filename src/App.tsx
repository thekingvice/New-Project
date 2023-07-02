import "./App.css";
import { useState } from "react";
import "animate.css/animate.compat.css";
import "animate.css";
import { Link, Element } from "react-scroll";
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
// import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <nav className="Navigation">
        <div className="Navigation__hamburger-menu-wrapper">
          <img
            className="Navigation__hamburger-icon"
            onClick={toggleMenu}
            src="/hamburger_menu_images/hamburger-menu.svg"
            alt="menu"
            style={{ visibility: isOpen ? "hidden" : "visible" }}
          />
          <div
            className="Navigation__menu"
            style={{ visibility: isOpen ? "visible" : "hidden" }}
          >
            <img
              src="/hamburger_menu_images/close.svg"
              alt=""
              className="Navigation__close-icon"
              onClick={toggleMenu}
            />
            <Link
              className="Link"
              to="section1"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Counter
            </Link>
            <Link
              className="Link"
              to="section2"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Progress Bar
            </Link>
            <Link
              className="Link"
              to="section3"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Accordian
            </Link>
            <Link
              className="Link"
              to="section4"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Tool Tip
            </Link>
            <Link
              className="Link"
              to="section5"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Pop Up
            </Link>
            <Link
              className="Link"
              to="section6"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Dropdown
            </Link>
            <Link
              className="Link"
              to="section7"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Tabs
            </Link>
            <Link
              className="Link"
              to="section8"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Radio Buttons
            </Link>
            <Link
              className="Link"
              to="section10"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Toggle Switch
            </Link>
            <Link
              className="Link"
              to="section11"
              smooth={true}
              duration={500}
              offset={-65}
            >
              Input Validation
            </Link>
          </div>
        </div>
      </nav>

      <section
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="Header" style={{ fontSize: "2rem", fontWeight: 700 }}>
          Simple
          <h1 className="Header-react">
            React <img className="React-Logo" src="/react.svg" alt="" />
          </h1>
          Components.
        </h1>
        <div className="ScrollDown ">
          <p>Scroll Down</p>
          <img className="DownArrow" src="/arrow_down.svg" alt="down-arrow" />
        </div>
      </section>

      {/* animate__animated animate__shakeY */}
      <Element name="section1">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <Counter />
        </ScrollAnimation>
      </Element>

      <Element name="section2">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <ProgressBar />
        </ScrollAnimation>
      </Element>

      <Element name="section3">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <Carrousel />
        </ScrollAnimation>
      </Element>

      <Element name="section4">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <Accordian />
        </ScrollAnimation>
      </Element>

      <Element name="section5">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <ToolTip />
        </ScrollAnimation>
      </Element>

      <Element name="section6">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <Popup />
        </ScrollAnimation>
      </Element>

      <Element name="section7">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <Dropdown />
        </ScrollAnimation>
      </Element>

      <Element name="section8">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <Tabs />
        </ScrollAnimation>
      </Element>

      <Element name="section9">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <RadioButtons />
        </ScrollAnimation>
      </Element>

      <Element name="section10">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <ToggleSwitch />
        </ScrollAnimation>
      </Element>

      <Element name="section11">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <InputValidation />
        </ScrollAnimation>
      </Element>

      {/* <Element name="section12">
        <ScrollAnimation animateIn="fadeIn" offset={100} animateOnce={true}>
          <HamburgerMenu />
        </ScrollAnimation>
      </Element> */}
    </div>
  );
}

export default App;

import "./HamburgerMenu.css";
import { useState } from "react";
import Gist from "super-react-gist";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="HamburgerMenu">
      <h1 className="HamburgerMenu__h1">Hamburger Menu</h1>
      <p>Click the menu icon</p>
      <div className="HamburgerMenu__wrapper">
        <nav className="HamburgerMenu__nav">
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
              alt=""
              onClick={toggleMenu}
            />
            <p className="HamburgerMenu__option">Home</p>
            <p className="HamburgerMenu__option">About</p>
            <p className="HamburgerMenu__option">Social</p>
          </div>
        </nav>
      </div>
      <div className="HamburgerMenu__gist">
        <Gist url="https://gist.github.com/thekingvice/da9c109130189033da71c924a9b60e8f" />
      </div>
    </div>
  );
}

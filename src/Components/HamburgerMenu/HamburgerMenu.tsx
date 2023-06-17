import "./HamburgerMenu.css";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="wrapper">
      <nav>
        <img
          className="hamburger"
          src="/hamburger_menu_images/hamburger-menu.svg"
          alt="menu"
          onClick={toggleMenu}
          style={{ visibility: isOpen ? "hidden" : "visible" }}
        />
        <div
          className="mobile-menu"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <img
            className="menu-icon"
            src="/hamburger_menu_images/close.svg"
            alt=""
            onClick={toggleMenu}
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
      </nav>
    </div>
  );
}

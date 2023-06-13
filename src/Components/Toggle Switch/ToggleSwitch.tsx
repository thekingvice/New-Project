import { useState } from "react";
import "./ToggleSwitch.css";
import Gist from "super-react-gist";

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="ToggleSwitch__wrapper">
      <h1 className="ToggleSwitch__h1">Toggle Switch</h1>
      <div
        className="ToggleSwitch__background"
        onClick={handleClick}
        style={{ background: isClicked ? "#04aa6d" : "" }}
      >
        <div
          className={`ToggleSwitch__handle ${isClicked ? "clicked" : ""}`}
        ></div>
      </div>
      <div className="ToggleSwitch__gist">
        <Gist url="https://gist.github.com/thekingvice/56ba84b9b41b9854ced32670964b5f04" />
      </div>
    </div>
  );
}

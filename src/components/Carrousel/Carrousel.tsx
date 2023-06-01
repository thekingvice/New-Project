import { useState } from "react";
import "./Carrousel.css";
import Gist from "react-gist";

export default function Carrousel() {
  const [position, setPosition] = useState(0);

  //Images are placed inside their own directory called "carrousel_images" within the "public" directory
  const imagePaths = [
    "/carrousel_images/skill-icons_react-dark.png",
    "/carrousel_images/skill-icons_angular-dark.png",
    "/carrousel_images/skill-icons_svelte.png",
  ];

  function incrementPositionPlus() {
    if (position === imagePaths.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }

  function incrementPositionMinus() {
    if (position === 0) {
      setPosition(imagePaths.length - 1);
    } else {
      setPosition(position - 1);
    }
  }

  return (
    <div className="Carrousel">
      <h1 className="Carrousel__h1">Image Carrousel</h1>
      <div className="Carrousel__wrapper">
        <button
          className="Carrousel__button"
          onClick={incrementPositionMinus}
        >{`<`}</button>
        <img src={imagePaths[position]} alt="carrousel-image" />
        <button
          className="Carrousel__button"
          onClick={incrementPositionPlus}
        >{`>`}</button>
      </div>
      <>{position + 1}</>
      <div className="Carrousel__gist">
        <Gist id="bf8e9e9203c6559cbc45759f763e310a" />
      </div>
    </div>
  );
}

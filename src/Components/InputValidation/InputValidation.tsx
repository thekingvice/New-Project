import "./InputValidation.css";
import { useState } from "react";
import Gist from "super-react-gist";

export default function InputValidation() {
  const [inputValue, setInputValue] = useState("");

  const [result, setResult] = useState("");

  const [textColor, setTextColor] = useState(true);

  const [showResult, setShowResult] = useState(false);

  function handleValidation(str: string) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isMatch = regex.test(str);
    if (isMatch) {
      setResult("Valid Input");
      setTextColor(true);
      setShowResult(true);
    } else {
      setResult("Error: Invalid Input");
      setTextColor(false);
      setShowResult(true);
    }
  }

  return (
    <div className="InputValidation">
      <h1 className="InputValidation__h1">Input Validation</h1>
      <div className="InputValidation__wrapper">
        <input
          className="InputValidation__input"
          type="text"
          name="input"
          id="email"
          placeholder="Enter Email Address"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            console.log(inputValue);
          }}
        />
        <button
          className="InputValidation__submit"
          onClick={() => {
            handleValidation(inputValue);
          }}
        >
          Submit
        </button>
      </div>
      <p
        className="InputValidation__result"
        style={{
          background: textColor ? "green" : "red",
          display: showResult ? "block" : "none",
        }}
      >
        {result}
      </p>
      <div className="InputValidation__gist">
        <Gist url="https://gist.github.com/thekingvice/dcc75008e68207ae4a659fca0fb025e7" />
      </div>
    </div>
  );
}

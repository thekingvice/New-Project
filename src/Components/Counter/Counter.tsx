import { useState } from "react";
import "./Counter.css";
import Gist from "super-react-gist";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrementPlus() {
    setCounter(counter + 1);
  }

  function handleIncrementMinus() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    //"Counter" and "Counter__h1" are not required
    <div className="Counter">
      <h1 className="Counter__h1">Counter</h1>
      <div className="Counter__wrapper">
        <button className="Counter__button" onClick={handleIncrementMinus}>
          -
        </button>
        <div>{counter}</div>
        <button className="Counter__button" onClick={handleIncrementPlus}>
          +
        </button>
      </div>

      <div className="Counter__gist">
        <Gist url="https://gist.github.com/thekingvice/4d1bb951905be671192ce8c51ca44efa" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/counter-9tsjqh"
          target="_blank"
        >
          Test on CodeSandbox
          <img
            className="Sandbox__icon"
            src="/codesandbox.svg"
            alt="codesandbox-logo"
          />
        </a>
      </div>
    </div>
  );
}

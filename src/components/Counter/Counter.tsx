import { useState } from "react";
import "./Counter.css";
import Gist from "react-gist";

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
        <button onClick={handleIncrementMinus}>-</button>
        <div>{counter}</div>
        <button onClick={handleIncrementPlus}>+</button>
      </div>

      <div className="Counter__gist">
        <Gist id="4d1bb951905be671192ce8c51ca44efa" />
      </div>
    </div>
  );
}

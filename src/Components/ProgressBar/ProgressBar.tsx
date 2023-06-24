import { useState } from "react";
import "./ProgressBar.css";
import Gist from "super-react-gist";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  function incrementProgressBar() {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  }

  function resetProgress() {
    setProgress(0);
  }

  return (
    <div className="ProgressBar">
      <h1 className="ProgressBar__h1">Progress Bar</h1>
      <div className="ProgressBar__wrapper">
        <div className="ProgressBar__background">
          <div
            className="ProgressBar__indicator"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div>{`${progress}%`}</div>
        <button
          className="ProgressBar__incrementor"
          onClick={incrementProgressBar}
        >
          Add 10%
        </button>
        <button className="ProgressBar__reset" onClick={resetProgress}>
          Reset
        </button>
      </div>
      <div className="ProgressBar__gist">
        <Gist url="https://gist.github.com/thekingvice/add3ffc62fbce47a6bce9fdf739add5b" />
        <a
          className="Sandbox__link"
          href="https://codesandbox.io/s/progress-bar-nmkzfz"
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

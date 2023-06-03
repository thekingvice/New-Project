import { useState } from "react";
// import "./ProgressBar.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  function incrementProgressBar() {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  }

  return (
    <div className="ProgressBar__wrapper">
      <div className="ProgressBar__background">
        <div className="ProgressBar__indicator"></div>
      </div>
      <button
        className="ProgressBar__incrementor"
        onClick={() => {
          incrementProgressBar();
          console.log(progress);
        }}
      >
        Add 10%
      </button>
    </div>
  );
}

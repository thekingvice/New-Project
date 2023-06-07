import "./Dropdown.css";
import Gist from "super-react-gist";

export default function Dropdown() {
  return (
    <div className="Dropdown">
      <h1 className="Dropdown__h1">Dropdown</h1>
      <div className="Dropdown__wrapper">
        Hover me
        <ul className="Dropdown__options">
          <li className="Dropdown__option">Option 1</li>
          <li className="Dropdown__option">Option 2</li>
          <li className="Dropdown__option">Option 3</li>
          <li className="Dropdown__option">Option 4</li>
        </ul>
      </div>
      <div className="Dropdown__gist">
        <Gist url="https://gist.github.com/thekingvice/f6b611dd407e9e6ac82e768c892dff13" />
      </div>
    </div>
  );
}

// .Dropdown__wrapper {
//     position: relative;
// }

// .Dropdown__wrapper:hover > .Dropdown__options {
//     display: block;
// }

// .Dropdown__options {
//     position: absolute;
//     display: none;
// }

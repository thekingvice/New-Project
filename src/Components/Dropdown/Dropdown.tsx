import "./Dropdown.css";

export default function Dropdown() {
  return (
    <div className="Dropdown__wrapper">
      Hover me
      <ul className="Dropdown__options">
        <li className="Dropdown__option">Option 1</li>
        <li className="Dropdown__option">Option 2</li>
        <li className="Dropdown__option">Option 3</li>
        <li className="Dropdown__option">Option 4</li>
      </ul>
    </div>
  );
}

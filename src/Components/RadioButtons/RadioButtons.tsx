import { useState } from "react";

export default function RadioButtons() {
  const [radioButtons, setRadioButtons] = useState([
    { id: 1, isOn: false },
    { id: 2, isOn: false },
    { id: 3, isOn: false },
  ]);

  function handleSelection(num: number) {
    const array = [...radioButtons];
    function resetButtons() {
      for (let i = 0; i < array.length; i++) {
        array[i].isOn = false;
      }
    }
    resetButtons();
    array[num].isOn = true;
    setRadioButtons(array);
  }

  return (
    <div>
      {radioButtons.map((button, index) => (
        <div
          onClick={() => {
            handleSelection(index);
            console.log(radioButtons);
          }}
          key={button.id}
          style={{
            backgroundColor: button.isOn ? "rgb(150,150,150)" : "rgb(75,75,75)",
          }}
        >
          {index}
        </div>
      ))}
    </div>
  );
}

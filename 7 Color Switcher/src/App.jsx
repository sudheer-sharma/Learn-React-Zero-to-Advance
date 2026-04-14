import { useState } from "react";
import "./App.css";
import Buttons from "./Component_First/Buttons";
import ColorBox from "./Component_First/ColorBox";

function App() {
  let [selecrtColor, setSelectColort] = useState("fuchsia");

  let color = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Pink",
    "White",
    "aqua",
    "darkkhaki",
    "maroon",
    "LightPink",
    "LightSalmon",
    "LightCoral",
    "LightGoldenRodYellow",
    "LightYellow",
    "LightCyan",
    "LightBlue",
    "LightSkyBlue",
    "LightSteelBlue",
    "LightGreen",
    "LightSeaGreen",
    "LavenderBlush",
    "MistyRose",
    "HoneyDew",
    "Azure",
    "Beige",
    "Ivory",
    "Linen",
  ];

  return (
    <>
      <h1 className="">🎨 Color Switcher 🖌️</h1>

      <div className="flex flex-wrap gap-2 my-7 justify-center">
        {color.map((items, idex) => {
          return (
            <Buttons key={idex} color={items} setSelectColort={setSelectColort}>
              {items}
            </Buttons>
          );
        })}
      </div>

      <ColorBox color={selecrtColor} />
    </>
  );
}

export default App;

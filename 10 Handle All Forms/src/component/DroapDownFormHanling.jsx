import React, { useState } from "react";

const DroapDownFormHanling = () => {
  // const [dropDown, setDeopDown] = useState("");

  const [languages, setLanguages] = useState("Java");

  const language = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "C#",
    "Ruby",
    "Go",
    "Swift",
    "PHP",
    "Kotlin",
  ];

  console.log(languages);

  return (
    <div>
      {/* <select
        style={{ padding: "8px 20px", fontSize: "20px" }}
        value={dropDown}
        onChange={(e) => setDeopDown(e.target.value)}
      >
        <option value="">----Select Blow----</option>
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
        <option value="Fourth">Fourth</option>
        <option value="Fivth">Fivth</option>
        <option value="Sixth">Sixth</option>
        <option value="Seventh">Seventh</option>
        <option value="Eighth">Eighth</option>
        <option value="Nineth">Nineth</option>
        <option value="Tenth">Tenth</option>
      </select> */}

      <select value={languages} onChange={(e) => setLanguages(e.target.value)}>
        <option value="">----Selecet Option----</option>

        {language.map((items) => {
          return (
            <option key={items} value={items}>
              {items}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DroapDownFormHanling;

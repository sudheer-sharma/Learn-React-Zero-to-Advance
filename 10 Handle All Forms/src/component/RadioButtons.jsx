import React, { useState } from "react";

const RadioButtons = () => {
  // const [gender, setGender] = useState("male");
  const [programming, setProgramming] = useState("C++");
  let languages = [
    "java",
    "LavaScript",
    "Python",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "Node.js",
    "React",
    "MongoDB",
    "MySql",
  ];

  console.log(programming);

  return (
    <div>
      {languages.map((items) => (
        <label key={items} htmlFor={items}>
          <input
            id={items}
            type="radio"
            value={items}
            name="programming"
            checked={programming === items}
            onChange={(e) => setProgramming(e.target.value)}
          />
          {items}
        </label>
      ))}

      {/* //
      //
      // */}

      {/* <label htmlFor="male">
        <input
          id="male"
          type="radio"
          value={"Male"}
          name="gender"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <label htmlFor="Female">
        <input
          id="Female"
          type="radio"
          value={"Female"}
          name="gender"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <label htmlFor="ohter">
        <input
          id="ohter"
          type="radio"
          value={"other"}
          name="gender"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label> */}
    </div>
  );
};

export default RadioButtons;

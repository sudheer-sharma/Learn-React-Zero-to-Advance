import React, { useState } from "react";

const DropDown_Ke_AndarDropDown = () => {
  const data = {
    India: [
      "Uttar Pradesh",
      "Maharashtra",
      "Madhya Pradesh",
      "Rajasthan",
      "Tamil Nadu",
    ],
    United_State: ["California", "Texas", "Florida", "New York", "Illinois"],
    Russia: [
      "Moscow Oblast",
      "Saint Petersburg",
      "Sverdlovsk Oblast",
      "Novosibirsk Oblast",
      "Krasnodar Krai",
    ],
    Pakistan: [
      "Punjab",
      "Sindh",
      "Khyber Pakhtunkhwa",
      "Balochistan",
      "Gilgit-Baltistan",
    ],
    China: ["Guangdong", "Beijing", "Shanghai", "Sichuan", "Zhejiang"],
  };

  const [selectCountry, setSelectCountry] = useState("");
  const [selectCity, setSelectCity] = useState("");

  console.log(selectCountry, selectCity);

  return (
    <div>
      <select
        value={selectCountry}
        onChange={(e) => {
          setSelectCountry(e.target.value);
          setSelectCity("");
        }}
      >
        <option value="">----Select Country----</option>
        {Object.keys(data).map((items) => {
          return (
            <option key={items} value={items}>
              {items}
            </option>
          );
        })}
      </select>
      {/* // */}
      {/* // */}
      {selectCountry && (
        <select
          value={selectCity}
          onChange={(e) => setSelectCity(e.target.value)}
        >
          <option value="">----Select City----</option>
          {data[selectCountry].map((items) => {
            return (
              <option key={items} value={items}>
                {items}
              </option>
            );
          })}
        </select>
      )}

      <h3>
        Select Country : {selectCountry}, Select City : {selectCity}
      </h3>
    </div>
  );
};

export default DropDown_Ke_AndarDropDown;

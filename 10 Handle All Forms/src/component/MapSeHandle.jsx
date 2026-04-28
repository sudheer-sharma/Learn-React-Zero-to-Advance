import React, { useState } from "react";

const MapSeHandle = () => {
  const [allSelect, setAllSelect] = useState({
    HTML: false,
    CSS: false,
    JS: false,
  });

  function handleAll(e) {
    let key = e.target.name;

    setAllSelect({ ...allSelect, [key]: e.target.checked });
  }

  let allChecked = Object.values(allSelect).every((item) => item === true);

  return (
    <div>
      <label htmlFor="">
        <input
          type="checkBox"
          checked={allChecked}
          onChange={(e) => {
            setAllSelect({
              HTML: e.target.checked,
              CSS: e.target.checked,
              JS: e.target.checked,
            });
          }}
        />
        All Select
      </label>

      {Object.keys(allSelect).map((items) => (
        <label key={items} htmlFor={items}>
          <input
            id={items}
            type="checkBox"
            name={items}
            checked={allSelect[items]}
            onChange={handleAll}
          />
          {items}
        </label>
      ))}
      <br />
      {allSelect.HTML && "(HTML Select)"}
      <br />
      {allSelect.CSS && "(CSS Select)"}
      <br />
      {allSelect.JS && "(JS Select)"}
    </div>
  );
};

export default MapSeHandle;

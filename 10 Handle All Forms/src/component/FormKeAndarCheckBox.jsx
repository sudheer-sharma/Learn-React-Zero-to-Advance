import React, { useState } from "react";

const FormKeAndarCheckBox = () => {
  const [formData, setFormData] = useState({
    email: "",
    tc: false,
  });

  const handleData = (e) => {
    let key = e.target.name;

    console.log(key);

    setFormData({ ...formData, [key]: e.target.checked });
  };

  return (
    <div>
      <label htmlFor="tc">
        <input
          id="tc"
          type="email"
          name="tc"
          checked={formData.tc}
          onChange={handleData}
        />
      </label>
    </div>
  );
};

export default FormKeAndarCheckBox;

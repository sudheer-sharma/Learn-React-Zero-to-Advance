import React, { useState } from "react";

const FormKeAndarCheckBox = () => {
  const [formData, setFormData] = useState({
    email: "",
    tc: false,
  });

  const handleData = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  // console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter value"
          name="email"
          value={formData.email}
          onChange={handleData}
        />

        {/* term and condition */}
        <label htmlFor="tc">
          <input
            id="tc"
            type="checkbox"
            name="tc"
            checked={formData.tc}
            onChange={handleData}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormKeAndarCheckBox;

import React, { useState } from "react";

const MultipalInputs = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // function fullName(e) {
  //   setName(e.target.value);
  // }
  // function fullEmail(e) {
  //   setEmail(e.target.value);
  // }

  // function clearHander() {
  //   setName("");
  //   setEmail("");
  // }

  const [data, setData] = useState({ name: "", email: "" });

  console.log(data);

  // function nameHandler(e) {
  //   console.log(e.target.name);
  //   setData({ ...data, name: e.target.value });
  // }
  // function emailHandler(e) {
  //   setData({ ...data, email: e.target.value });
  // }

  function inputHandle(e) {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function clearHandler() {
    setData({ name: "", email: "", phoneNumber: "" });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        placeholder="Enter Name"
        // onChange={nameHandler}
        onChange={inputHandle}
      />
      <br />
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder="Enter Email"
        // onChange={emailHandler}
        onChange={inputHandle}
      />
      <br />
      <input
        type="number"
        name="phoneNumber"
        value={data.phoneNumber}
        placeholder="Enter Phone Number"
        // onChange={emailHandler}
        onChange={inputHandle}
      />
      <br />
      <button onClick={clearHandler}>Click Me</button>
      <br />
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.phoneNumber}</h1>
    </div>
  );
};

export default MultipalInputs;

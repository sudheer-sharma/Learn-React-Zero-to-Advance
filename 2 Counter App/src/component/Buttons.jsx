import React from "react";

const Buttons = ({ text, func }) => {
  return (
    <>
      <button onClick={func}>{text}</button>
    </>
  );
};

export default Buttons;

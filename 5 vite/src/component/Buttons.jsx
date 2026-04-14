import React from "react";

const Buttons = (porps) => {
  return (
    <div>
      <button className="bg-amber-500 py-2 px-5 rounded-2xl">
        {porps.title}
      </button>
    </div>
  );
};

export default Buttons;

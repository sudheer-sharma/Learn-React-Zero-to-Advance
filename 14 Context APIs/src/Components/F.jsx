import React from "react";
import { useMyContext } from "../MyContext";
// import { useContext } from "react";
// import { MyContext } from "../MyContext";

const F = () => {
  // const data = useContext(MyContext);
  // // const data = useMyContext();

  const { setCount } = useMyContext();

  return (
    <div className="bg-orange-50 p-7">
      F <br />{" "}
      <button
        className="bg-green-300 px-2"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
    </div>
  );
};

export default F;

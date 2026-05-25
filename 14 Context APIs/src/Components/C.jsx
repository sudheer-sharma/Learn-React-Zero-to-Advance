import React from "react";
import { useMyContext } from "../MyContext";
// import { useContext } from "react";
// import { MyContext } from "../MyContext";

const C = () => {
  // const data = useContext(MyContext);
  // //  const data = useMyContext();

  const { count } = useMyContext();

  return (
    <div className="bg-fuchsia-500 p-7">
      <p className="border bg-white">{count}</p>C
    </div>
  );
};

export default C;

import React from "react";
import { useMyContext } from "../MyContext";

const D = () => {
  const { count } = useMyContext();

  return (
    <div className="bg-cyan-300 p-7">
      <p className="border bg-white">{count}</p>D
    </div>
  );
};

export default D;

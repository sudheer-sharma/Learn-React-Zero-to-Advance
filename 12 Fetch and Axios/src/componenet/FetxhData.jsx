import React from "react";
import axios from "axios";

const FetxhData = () => {
  const config = {
    url: "https://jsonplaceholder.typicode.com/users",
  };

  const fetchesData = async () => {
    const data = await axios(config);
    console.log(data);
  };

  return (
    <div>
      <button
        className="bg-blue-500 py-1 px-3 rounded text-white"
        onClick={fetchesData}
      >
        Fatch Data
      </button>
    </div>
  );
};

export default FetxhData;

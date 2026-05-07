import React, { useState } from "react";
import axios from "axios";

const FetxhData = () => {
  // const config = {
  //   url: "https://jsonplaceholder.typicode.com/users",
  //   headers: {
  //     accept: "application/kailash",
  //   },
  //   timeout: 50,
  // };
  // const fetchesData = async () => {
  //   const users = await axios(config);
  //   console.log(users);
  // };
  //
  //
  const [userss, setsetUserss] = useState([]);

  const fetchesData = async () => {
    const user = await axios({
      url: "https://69fc2e80fce564e2591765c1.mockapi.io/users",
    });
    setsetUserss(user.data);
  };

  console.log(userss);

  return (
    <div>
      <button
        className="bg-blue-500 py-1 px-3 rounded text-white"
        onClick={fetchesData}
      >
        Fatch Data
      </button>
      {userss.map((items) => {
        return (
          <div key={items.id}>
            <samp>Name : {items.name}, </samp>
            <samp>Age : {items.age}</samp>
          </div>
        );
      })}
    </div>
  );
};

export default FetxhData;

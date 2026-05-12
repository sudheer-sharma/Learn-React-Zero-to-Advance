import React, { useEffect, useState } from "react";
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
  const [userDetail, setUserDetail] = useState({
    name: "",
    age: "",
  });

  const fetchesData = async () => {
    const user = await axios({
      url: "https://69fc2e80fce564e2591765c1.mockapi.io/users",
    });
    setsetUserss(user.data);
  };

  const postData = async () => {
    const user = await axios({
      url: "https://69fc2e80fce564e2591765c1.mockapi.io/users",
      method: "post",
      data: userDetail,
      // {
      //   name: "Misail",
      //   age: 20,
      // },
    });
  };

  function handleOnChange(e) {
    const { name, value } = e.target;

    setUserDetail((previos) => {
      return { ...previos, [name]: value };
    });
    fetchesData();
  }

  useEffect(() => {}, []);

  return (
    <div>
      {/* <button
        className="bg-blue-500 py-1 px-3 rounded text-white"
        onClick={fetchesData}
      >
        Fatch Data
      </button> */}
      <br />
      <br />
      <input
        type="text"
        name="name"
        value={userDetail.name}
        placeholder="Enter name"
        onChange={handleOnChange}
      />
      <br /> <br />
      <input
        type="number"
        name="age"
        value={userDetail.age}
        placeholder="Enter age"
        onChange={handleOnChange}
      />
      <br /> <br />
      <button
        className="bg-blue-500 py-1 px-3 rounded text-white"
        onClick={postData}
      >
        Fatch Data
      </button>
      {userss.map((items) => {
        return (
          <div
            className="bg-gray-700 p-6 w-fit m-auto my-3 rounded-xl  text-white"
            key={items.id}
          >
            <p>Name : {items.name} </p>
            <p>Age : {items.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetxhData;

import { useEffect, useState } from "react";

const Card = () => {
  // // why state
  let count = 1;

  let [data, setData] = useState(0);
  let [dicData, setDicData] = useState(0);
  // console.log(useState(10));
  // console.log(data, setData);

  useEffect(() => {
    console.log("Kailash Shiwagma");
  }, [data, dicData]);

  const [userData, setUserData] = useState({
    name: "Kailash",
    age: 25,
    passi0n: "coding",
  });

  function updates() {
    // setData((prev) => {
    //   prev += 1;
    //   console.log(prev);
    //   return prev + 1;
    // });
    // setData(data + 1);
    // setData(data + 1);
    // setData(data + 1);
    // setData(data + 1);
    //
    // setData((item) => item + 1);
    // setData((item) => item + 1);
    // setData((item) => item + 1);
    // setData((item) => item + 1);
    // setData((item) => item + 1);
    // setData((item) => item + 1);
    //
    // setData(++data);
  }
  return (
    <div>
      <h1>{data}</h1>

      <button
        className="px-5 py-1 rounded-2xl border"
        //  onClick={updates}
        onClick={() => {
          setData(data + 1);
        }}
      >
        Increament
      </button>

      <h1>{dicData}</h1>
      <button
        className="px-5 py-1 rounded-2xl border"
        //  onClick={updates}
        onClick={() => {
          setDicData(dicData - 1);
        }}
      >
        Decreament
      </button>
    </div>
  );
};
export default Card;

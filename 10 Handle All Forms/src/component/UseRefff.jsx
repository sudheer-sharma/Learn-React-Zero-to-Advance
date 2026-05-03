import React, { useEffect, useState } from "react";
import { useRef } from "react";
//
// // First part
//
// const UseRefff = () => {
//   const useRefff = useRef();

//   function handleReff() {
//     // console.log(useRefff.current.focus());
//     console.log((useRefff.current.style.backgroundColor = "blue"));
//     console.log((useRefff.current.style.borderRadius = "50%"));
//     console.log(useRefff.current.click());
//   }
//   return (
//     <div>
//       {/* <input ref={useRefff} type="text" placeholder="Enter value" /> */}
//       {/*  */}
//       <div
//         onClick={() => console.log("Div pe click huaa hai")}
//         ref={useRefff}
//         style={{ height: "10rem", width: "10rem", backgroundColor: "red" }}
//       ></div>

//       <button onClick={handleReff}>Click me</button>
//     </div>
//   );
// };

// export default UseRefff;
//
//
// // // // Scond paart
//
//
// const UseRefff = () => {
//   const [count, setCount] = useState(0);
//   const useReff = useRef(0);

//   let convetVal = 0;

//   function handleIncreament() {
//     setCount((prev) => prev + 1);
//     console.log((useReff.current += 1));
//     // convetVal += 1;
//     // console.log(convetVal);
//   }

//   useEffect(() => {
//     console.log("re render hua hai");
//   });

//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{count}</h1>
//       <h1>{count}</h1>
//       <button
//         onClick={handleIncreament}
//         style={{ padding: "6px 12px", fontSize: "20px" }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// };

// export default UseRefff;
//
//
// Third type
//
//
const UseRefff = () => {
  const [randomNum, setRandomNum] = useState(0);
  // const [randorCont, setRandorCont] = useState(0);

  let rendomCountRef = useRef(0);

  function generateRandomNumber() {
    let rndNum = Math.floor(Math.random() * 100) + 1;
    setRandomNum(rndNum);
  }

  useEffect(() => {
    console.log("useEfect Reagar huaa hai");
    // setRandorCont(randorCont + 1);
    rendomCountRef.current += 1;
  });

  return (
    <div>
      <h1>{randomNum}</h1>
      <h1>Re-Randor Count : {rendomCountRef.current}</h1>
      <button
        onClick={generateRandomNumber}
        style={{ padding: "6px 12px", fontSize: "20px" }}
      >
        Click Me
      </button>
    </div>
  );
};

export default UseRefff;

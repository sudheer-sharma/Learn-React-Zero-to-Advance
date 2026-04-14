import React from "react";
import "./App.css";
import NavbarCd from "./NavbarCd";

function App() {
  let last = "Shiwagma";

  function called() {
    return "Hello, Kailash Shiwagma";
  }

  let age = 18;

  let arr = [
    "Kailash",
    "Shiwagma",
    "Kumar",
    "Manaw",
    "Adarsh",
    "Shiwagma",
    "Bhawi",
    "Mandli",
  ];

  return (
    // <>
    //   {/* <NavbarCd /> */}

    //   {/* <h1>Kailash, {called()}</h1>
    //   <h1> {age >= 18 ? "true" : "false"}</h1> */}

    //   {/* <h1
    //     style={{
    //       color: "red",
    //       "font-size": "40px",
    //       "background-color": "black",
    //     }}
    //   >
    //     Kailash Shiwagma
    //   </h1> */}

    //   {/* {age >= 18 ? (
    //     <p style={{ color: "red" }}>You can vote</p>
    //   ) : (
    //     <p style={{ color: "blue" }}>you can no vote</p>
    //   )} */}

    //   {/* {arr.map((items, index) => {
    //     console.log(items);
    //     return <h1 key={index}>{items}</h1>;
    //   })} */}

    //   {/* <h1>Kailash Shiwagma {2 + 2}</h1>
    //   {React.createElement("h1", null, "Alex Hainnar")} */}

    //   {/* <div>
    //     <p>Hello</p>
    //   </div>
    //   {React.createElement(
    //     "div",
    //     null,
    //     React.createElement(
    //       "p",
    //       { style: { backgroundColor: "red" } },
    //       "hello",
    //     ),
    //   )} */}

    //   {/* <h1 style={{ backgroundColor: "blue" }}>Hello how are you</h1> */}
    // </>
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "how are you",
    )
  );
}
export default App;

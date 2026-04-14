import { useState } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Layout from "./component/Layout";
import Card from "./Card";

function App() {
  // const [count, setData] = useState("Kailash Shiwagma");

  // function kabootar(data) {
  //   setData(data);
  //   console.log(count);
  // }

  // let arr = [1, 2, 3, 4, 5];

  // function handleInput(e) {
  //   e.preventDefault();
  //   console.log("Kailash Shiwagma");
  // }

  // function handleInput(e) {
  //   // console.log(e);
  //   console.log(e.target.value);
  // }

  function upperHandler(e) {
    console.log("Upper div");
    console.log(e.target.value);
  }

  function middleHandler(e) {
    console.log("Middle div");
    console.log(e.target.value);
  }

  function innerHandler(e) {
    console.log("Inner div");
    console.log(e.target.value);
  }

  function zeroHandler(e) {
    e.stopPropagation();
    console.log("Zero div");
    console.log(e.target.value);
  }

  return (
    <div>
      {/* <Header data={count} func={kabootar} />
      <Layout data={count} />
      <Footer data={count} /> */}

      {/* <h1>{count}</h1> */}
      {/* <button
        className="p-1 border"
        onClick={() => {
          (count + 1, console.log(count));
        }}
      >
        Click me
      </button> */}

      {/* {arr.map((item, index, elemsnt) => {
        return <Card key={index} />;
      })} */}

      {/* <Card /> */}

      {/* <button
        onContextMenu={() => {
          console.log("object");
        }}
        className="text-2xl px-9 py-3 rounded-3xl border mt-50 "
      >
        click me
      </button>

      <input
        onChange={handleInput}
        type="text"
        className="text-white border"
        placeholder="Enter"
      />

      <form onSubmit={handleInput} action="">
        <input type="text" className="text-white border" placeholder="Enter" />
        <button className="text-2xl px-5 py-1 rounded-3xl border mt-10 ">
          Click Me
        </button>
      </form> */}

      {/* <button
        onClick={handleInput}
        className="text-2xl px-5 py-1 rounded-3xl border mt-10"
      >
        Click me
      </button>

      <input
        onChange={handleInput}
        type="text"
        className="text-white border"
        placeholder="Enter"
      /> */}

      <div
        onClick={upperHandler}
        className="bg-gray-200 text-black w-full p-9 px-"
      >
        Upper
        <div onClick={middleHandler} className="bg-amber-300 w-full p-9 px-">
          Middle
          <div onClick={innerHandler} className="bg-green-200 w-full p-9 px-">
            Inner
            <div
              onClick={zeroHandler}
              className="bg-fuchsia-300 w-full p-9 px-"
            >
              Zero
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import ComponentA from "./componenet/ConmponentA";
import ComponentB from "./componenet/ConmponentB";
import ComponentC from "./componenet/ConmponentC";

function App() {
  // let isTrue = "C";
  // if (isTrue === "A") {
  //   return (
  //     <>
  //       <h1>Kailash AAAAAAAAA</h1>
  //     </>
  //   );
  // }
  // if (isTrue === "B") {
  //   return (
  //     <>
  //       <h1>Kailash BBBBBBBBBBB</h1>
  //     </>
  //   );
  // }
  // if (isTrue === "C") {
  //   return (
  //     <>
  //       <h1>Kailash CCCCCCCCCCCC</h1>
  //     </>
  //   );
  // }
  // return <h1>Hello, Mr.Margo neelam</h1>;
  //
  // let day = 3;
  // return (
  //   <div>
  //     {day === 1 ? (
  //       <h1>Monday</h1>
  //     ) : day === 2 ? (
  //       <h1>2 Monday</h1>
  //     ) : day === 3 ? (
  //       <h1>3 Monday</h1>
  //     ) : (
  //       <h1>3 No any Days</h1>
  //     )}
  //   </div>
  // );
  //
  // let message = "Shiwagma Kailash";
  // return <>{message ? <h1>Hello, {message}</h1> : null}</>;
  //
  // let message = "Sudheer Sharma";
  // // return <>{message && <h1>{message}</h1> && <h1>No message</h1>}</>;
  // return <>{message && <h1>{message}</h1>}</>;
  //
  // let message = "Hello, how are you";
  // return (
  //   <>
  //     <h1>{message}</h1>
  //   </>
  // );
  //
  //
  // let option = "m";
  // let component = <h1>Hello</h1>;
  // if (option === "a") {
  //   component = <ConmponentA />;
  // } else if (option === "b") {
  //   component = <ConmponentB />;
  // } else if (option === "c") {
  //   component = <ConmponentC />;
  // } else {
  //   <h1>No any Message</h1>;
  // }
  // return <>{component}</>;
  //
  //
  // let color = "red";
  // return (
  //   <>
  //     <h1 className={color === "red" ? "bg-red-500" : "bg-blue-500"}>
  //       Kaialsh
  //     </h1>
  //   </>
  // );
  //
  //
  // const [togale, setTogale] = useState(false);
  // return (
  //   <>
  //     {togale ? <h1>togel true hai</h1> : <h1>togale false hai</h1>}
  //     <button onClick={() => setTogale((togale) => !togale)}>Click me</button>
  //   </>
  // );
  //
  //
  //
  // let option = "b";
  // let Component = option === "b" ? ComponentA : ComponentB;
  // return (
  //   <>
  //     <Component />
  //   </>
  // );
  //
  //
  //
  // let status = "d";
  // switch (status) {
  //   case "a":
  //     return <ComponentA />;
  //   case "b":
  //     return <ComponentB />;
  //   case "c":
  //     return <ComponentC />;
  //   default:
  //     return <h1>This is a sabse last</h1>;
  // }
  //
  //
  //
  const [option, setOption] = useState("Kaialsh");
  // let option = "fourth";
  let status = {
    first: <h1>First</h1>,
    second: <h1>second</h1>,
    third: <h1>third</h1>,
    fourth: <h1>fourth</h1>,
  };
  return (
    <>
      <h1>{option}</h1>

      <button onClick={() => setOption("first")}>first</button>
      <button onClick={() => setOption("second")}>second</button>
      <button onClick={() => setOption("third")}>third</button>
      <button onClick={() => setOption("fourth")}>fourth</button>
    </>
  );
}

export default App;

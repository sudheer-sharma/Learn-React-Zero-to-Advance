import "./App.css";
import A from "./Components/A";
import B from "./Components/B";
import { useMyContext } from "./MyContext";
// import { useContext } from "react";
// import { MyContext } from "./MyContext";

function App() {
  // const data = useContext(MyContext);
  // // const data = useMyContext();

  return (
    <div className="bg-red-500 w-fit p-10 mt-[10rem] m-auto text-center">
      {/* <p>{data}</p> */}
      App
      <A />
      <B />
    </div>
  );
}

export default App;

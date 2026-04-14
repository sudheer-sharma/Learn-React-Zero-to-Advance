import { useState } from "react";
import "./App.css";
import Buttons from "./component/Buttons";

function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }
  function Decrease() {
    if (count > 0) {
      setCount(count - 1);
      return;
    }
  }
  function Reaser() {
    setCount(0);
  }

  return (
    <>
      <h1>Number Counter App</h1>
      <h1>Count : {count}</h1>
      <div className="buttons">
        {/* <button onClick={Increase}>➕ Increase</button>
        <button onClick={Decrease}>➖ Decrease</button>
        <button onClick={Reaser}>🔄️ Reaser</button> */}

        {/* <Button names="➕ Increase" click={Increase} />
        <Button names=" ➖ Decrease" click={func={Decrease}} />
        <Button names="🔄️ Reaser" click={Reaser} /> */}

        <Buttons text="➕ Increase" func={Increase} />
        <Buttons text="➖ Decrease" func={Decrease} />
        <Buttons text="🔄️ Reaser" func={Reaser} />
      </div>
    </>
  );
}

function Button({ names, click }) {
  return (
    <>
      <button onClick={click}>{names}</button>
    </>
  );
}

export default App;

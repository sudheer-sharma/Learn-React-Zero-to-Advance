import { useState } from "react";
import "../App.css";

function Cards(props) {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function Dicrease() {
    if (count > 0) {
      setCount(count - 1);
      return;
    }
  }

  return (
    <div className="cards">
      <h1> {count}</h1>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={Dicrease}>Dicrease</button>
      </div>

      <h1>{props.titel}</h1>
      <p>{props.discriptoin}</p>
    </div>
  );
}

export default Cards;

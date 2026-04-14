import { useState } from "react";
import "./App.css";
import Questions from "./component/Questions";
import Timer from "./component/Timer";
import Result from "./component/Result";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <h1 className="">Questions</h1>

      {!isOver ? (
        <>
          <Timer setIsOver={setIsOver} />
          <Questions setIsOver={setIsOver} setScore={setScore} />
        </>
      ) : (
        <Result score={score} />
      )}
    </>
  );
}

export default App;

import { useState } from "react";
import questions from "./question.json";

const Questions = () => {
  const [currentIndx, setCurrentIndx] = useState(0);
  const [score, setScore] = useState(0);
  console.log(score);
  const handleSubmit = (option) => {
    if (option === questions[currentIndx].answer) {
      setScore((prev) => prev + 1);
    }
    if (currentIndx === questions.length - 1) {
      setCurrentIndx((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h2>{questions[currentIndx].question}</h2>

      <div className="flex flex-col  gap-5 ">
        {questions[currentIndx].options.map((items, index) => {
          return (
            <button
              onClick={() => handleSubmit(items)}
              key={index}
              className=" bg-black p-2 text-lg"
            >
              {items}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;

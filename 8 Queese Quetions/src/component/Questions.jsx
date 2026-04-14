import React, { useEffect, useState } from "react";
import questions from "./questions.json";

const Questions = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlwClick = (selecetElement) => {
    if (selecetElement === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };

  return (
    <div className="p-5  flex flex-col items-center">
      <h2 className="pb-2 text-white "> {questions[currentIndex].question}</h2>

      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col m-auto  gap-3 w-[40%]">
          {questions[currentIndex].options.map((opsion, index) => {
            return (
              <button
                className="bg-black text-sm py-2 text-gray-300 rounded-lg hover:border"
                key={index}
                onClick={() => {
                  handlwClick(opsion);
                }}
              >
                {opsion}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;

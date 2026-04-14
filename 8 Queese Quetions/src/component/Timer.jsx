import React, { useEffect, useState } from "react";

const Timer = ({ setIsOver }) => {
  const [timeCount, setTimeCount] = useState(20);
  const [displayTime, setDisplayTime] = useState("");

  // Left time logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeCount((items) => {
        if (items <= 0) {
          clearInterval(interval);
          return 0;
        }
        return items - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // TIme formate logic
  useEffect(() => {
    if (timeCount === 0) {
      setIsOver(true);
    }

    setDisplayTime(
      `${Math.floor(timeCount / 60)
        .toString()
        .padStart(2, 0)} : ${(timeCount % 60).toString().padStart(2, 0)}`,
    );
  }, [timeCount]);

  return (
    <div>
      <h1>⏰ Time Left : {displayTime}</h1>
    </div>
  );
};

export default Timer;

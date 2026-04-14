import { useEffect, useState } from "react";

const Times = () => {
  const [currentTimes, setCurrentTimes] = useState(12);
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimes((time) => {
        if (time <= 0) {
          clearInterval(interval);
          return 0;
        }
        return time - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let formateTImme = `${Math.floor(currentTimes / 60)
      .toString()
      .padStart(2, 0)} : ${(currentTimes % 60).toString().padStart(2, 0)}`;
    setDisplayTime(formateTImme);
  }, [currentTimes]);

  return (
    <div>
      <h1>⏰ Time Left : {displayTime}</h1>
    </div>
  );
};

export default Times;

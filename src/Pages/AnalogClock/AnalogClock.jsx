import React, { useEffect, useState } from "react";
import "./clock.css";

const AnalogClock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  const hour = time?.getHours() % 12;
  const second = time?.getSeconds();
  const minutes = time?.getMinutes();

  return (
    <div>
      <div
        className="hand hour"
        style={{ transform: `rotate(${hour * 30 + minutes / 2}deg)` }}
      ></div>
      <div
        className="hand minutes"
        style={{ transform: `rotate(${minutes * 6}deg)` }}
      ></div>
      <div
        className="hand seconds"
        style={{ transform: `rotate(${second * 6}deg)` }}
      ></div>
    </div>
  );
};

export default AnalogClock;

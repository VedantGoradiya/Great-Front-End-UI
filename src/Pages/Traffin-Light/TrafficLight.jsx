import React, { useEffect, useState } from "react";
import "./traffic.css";

const TrafficLight = () => {
  const [currLight, setCurrLight] = useState("red");

  useEffect(() => {
    let timer;

    switch (currLight) {
      case "red":
        timer = setInterval(() => {
          setCurrLight("green");
        }, 4000);
        break;

      case "green":
        timer = setInterval(() => {
          setCurrLight("yellow");
        }, 3000);
        break;

      case "yellow":
        timer = setInterval(() => {
          setCurrLight("red");
        }, 1000);
        break;

      default:
        break;
    }

    return () => clearInterval(timer);
  }, [currLight]);

  return (
    <div>
      <div>
        <div className={`light ${currLight == "red" ? "red" : ""}`}></div>
        <div
          className={`light  ${currLight == "yellow" ? "yellow" : ""}`}
        ></div>
        <div className={`light  ${currLight == "green" ? "green" : ""}`}></div>
      </div>
    </div>
  );
};

export default TrafficLight;

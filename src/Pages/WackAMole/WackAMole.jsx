import React, { useEffect, useState } from "react";
import "./mole.css";

const WackAMole = () => {
  const [grid, setGrid] = useState(new Array(9).fill(false));
  const [timer, setTimer] = useState(10);
  const [start, setStart] = useState(false);
  const [points, setPoints] = useState(0)

  useEffect(() => {
    let time, newGrd;
    if (start && timer > 0) {
      time = setInterval(() => {
        setTimer((prev) => {
          if (prev == 0) {
            setStart(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      newGrd = setInterval(() => {
        let newInd = Math.floor(Math.random() * 9);
        let tempGrid = [...grid];
        tempGrid[newInd] = true;
        setGrid(tempGrid);
      }, 900);
    }

    return () => {
      clearInterval(time);
      clearInterval(newGrd);
    };
  }, [start]);

  const handlClick = (ind) => {
    if(timer > 0){
        if(grid[ind]){
            setPoints((prev) => prev + 1)
        }
    }
  };

  return (
    <div className="cont">
        <h3>Points: {points}</h3>
      <div className="grid">
        {grid.map((val, id) => (
          <button onClick={() => handlClick(id)} className={`cell ${val ? "active" : ""}`} key={id}>
            {val}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => setStart(!start)}>Start</button>
      </div>
    </div>
  );
};

export default WackAMole;

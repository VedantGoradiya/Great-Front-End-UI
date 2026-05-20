import React, { useState, useEffect } from "react";
import "./progress.css";

const ProgressBar2 = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleComplete = () => {
    setActive((prev) => prev + 1);
  };

  return (
    <div className="cont">
      <h2>Progress Bar</h2>
      <div>
        <button onClick={handleClick}>Add</button>
        {[...new Array(count)].map((_, id) => (
          <Bars activeInd={id == active} onComplete={handleComplete} key={id} />
        ))}
      </div>
    </div>
  );
};

const Bars = ({ activeInd, onComplete }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!activeInd) return;

    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          onComplete();
          return 100;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  }, [activeInd]);

  return (
    <div>
      <div className="prog">
        <span>{value}%</span>
        <div style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar2;

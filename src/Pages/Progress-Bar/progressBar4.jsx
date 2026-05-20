import React, { useState, useEffect } from "react";
import "./progress.css";

const ProgressBar4 = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);
  const [limit, setLimit] = useState(3);
  const [isPlay, setIsPlay] = useState(true);

  const handleClick = () => {
    if (limit == 0) return;
    setLimit((prev) => prev - 1);
    setCount((prev) => prev + 1);
  };

  const handleComplete = () => {
    setActive((prev) => prev + 1);
    setLimit((prev) => prev + 1);
  };

  const toggle = () => {
    setIsPlay(!isPlay);
  };

  return (
    <div className="cont">
      <h2>Progress Bar - 4</h2>
      <h4>Play and Pause</h4>
      <div>
        <div className="btn-cont">
          <button onClick={handleClick}>Add</button>
          <button onClick={toggle}>{isPlay ? "Pause" : "Play"}</button>
        </div>
        {[...new Array(count)].map((_, id) => (
          <Bars
            isPlay={isPlay}
            activeInd={id == active}
            onComplete={handleComplete}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

const Bars = ({ activeInd, onComplete, isPlay }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!activeInd || !isPlay) return;

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
  }, [activeInd, isPlay]);

  return (
    <div>
      <div className="prog">
        <span>{value}%</span>
        <div style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar4;

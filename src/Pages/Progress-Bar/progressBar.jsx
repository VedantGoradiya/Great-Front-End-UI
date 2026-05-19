import React, { useEffect, useState } from "react";

import './progress.css'

const Bars = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          return 100;
        }
      });
    }, 100);
  }, []);

  return (
    <div>
      <div className="prog">
        <span>{value}%</span>
        <div style={{width: `${value}%`}}></div>
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="cont">
      <h2>Progress Bar</h2>
      <div>
        <button onClick={handleClick}>Add</button>
        {[...new Array(count)].map((_, id) => (
          <Bars key={id} />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

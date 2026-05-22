import React, { useState } from "react";

const UndoCounter = () => {
  const [value, setValue] = useState([0]);
  const [currIndex, setCurrIndex] = useState(0);

  const handleAdd = () => {
    const currVal = value[value.length - 1];
    setValue((prev) => [...prev, currVal + 1]);

    setCurrIndex(value.length);
  };

  const handleUndo = () => {
    if (currIndex == 0) return;
    setCurrIndex((prev) => prev - 1);
  };
  const handleRedo = () => {
    console.log(value.length);
    if (currIndex == value.length - 1) return;
    setCurrIndex((prev) => prev + 1);
  };

  return (
    <div className="cont">
      <div>
        <span>Value: {value[currIndex]}</span>
      </div>
      <div>
        <div className="counter">
          <button onClick={handleUndo}>{`Undo (<-)`}</button>
          <button onClick={handleAdd}>Counter</button>
          <button onClick={handleRedo}>{`Redo (->)`}</button>
        </div>
      </div>
    </div>
  );
};

export default UndoCounter;

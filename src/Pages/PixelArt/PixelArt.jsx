import React, { useState } from "react";
import "./pixel.css";

const Colors = ["#f00", "#f80", "#ff0", "#0f0", "#00f", "#90f", "#fff", "#000"];

const genGrid = () => {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));
};
const PixelArt = () => {
  const [grid, setGrid] = useState(() => genGrid());
  const [isPaintng, setIsPainting] = useState(false);
  const [selectedClr, setSelectedClr] = useState(null);

  const paintCell = (row, col) => {
    setGrid((prev) => {
      const temp = prev.map((val) => [...val])
      temp[row][col] = selectedClr
      return temp
    })
  };

  return (
    <div className="main-div">
      <div className="clr-grid">
        {Colors.map((val, id) => (
          <div
            onClick={() => setSelectedClr(val)}
            style={{
              backgroundColor: val,
              border: val == "#fff" ? "1px solid black" : null,
            }}
            className="clr-div"
          ></div>
        ))}
      </div>
      <div className="grid-cont">
        {grid.map((row, rowId) => (
          <div key={rowId}>
            {row.map((col, colId) => (
              <div
                onMouseDown={() => {
                  setIsPainting(true);
                  paintCell(rowId, colId);
                }}
                onMouseEnter={() => {
                  if (isPaintng) {
                    paintCell(rowId, colId);
                  }
                }}
                onMouseUp={() => {
                  setIsPainting(false);
                }}
                key={colId}
                className="cell"
                style={{
                  background: col,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelArt;

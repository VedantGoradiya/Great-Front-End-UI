import React, { useRef, useState } from "react";
import "./sudoku.css";

const genBoard = () => {
  return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => ""));
};

const getSet = () => {
  return Array.from({ length: 9 }, () => new Set());
};

const getSubGridInd = (row, col) => {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};

const Sudoku = () => {
  const [board, setBoard] = useState(() => genBoard());
  const boardRef = useRef({
    rowSet: getSet(),
    colSet: getSet(),
    subGrid: getSet(),
  });

  const checkSet = (value, row, col) => {
    const subInd = getSubGridInd(row, col);
    if (
      boardRef.current.rowSet[row].has(value) ||
      boardRef.current.colSet[col].has(value) ||
      boardRef.current.subGrid[subInd].has(value)
    ) {
      return false;
    }
    return true;
  };

  const addValue = (value, row, col) => {
    if (checkSet(value, row, col)) {
      const subInd = getSubGridInd(row, col);
      boardRef.current.rowSet[row].add(value);
      boardRef.current.colSet[col].add(value);
      boardRef.current.subGrid[subInd].add(value);

      setBoard((prev) => {
        const updated = prev.map((val) => [...val]);
        updated[row][col] = value;
        return updated;
      });
    }
  };

  const removeValue = (value, row, col) => {
    const subInd = getSubGridInd(row, col);
    boardRef.current.rowSet[row].delete(value);
    boardRef.current.colSet[col].delete(value);
    boardRef.current.subGrid[subInd].delete(value);

    setBoard((prev) => {
      const updated = prev.map((val) => [...val]);
      updated[row][col] = "";
      return updated;
    });
  };

  const handleBoardChange = (e, row, col) => {
    let value = e.target.value;
    if (isNaN(value)) {
      return;
    }
    if (board[row][col]) {
      removeValue(board[row][col], row, col);
      return;
    }
    addValue(value, row, col);
  };

  return (
    <div className="main-div">
      <div className="grid-cont">
        {board.map((row, rowId) => (
          <div
            className={`${rowId == 2 || rowId == 5 ? "vertical board" : "board"}`}
            key={rowId}
          >
            {row.map((col, colId) => (
              <div
                className={`${colId == 2 || colId == 5 ? "horizontal" : ""}`}
                key={colId}
              >
                <input
                  onChange={(e) => handleBoardChange(e, rowId, colId)}
                  value={col}
                  className="cell"
                  type="text"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sudoku;

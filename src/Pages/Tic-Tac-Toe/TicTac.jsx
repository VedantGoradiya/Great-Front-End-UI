import React, { useState } from "react";
import "./tictac.css";

const genGrid = () => {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
};

const checkWinner = (board) => {
  const winningBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of winningBoard) {
    if (board[a] && board[b] == board[a] && board[a] == board[c]) {
      return board[a];
    }
  }

  return null;
};

const TicTac = () => {
  const [grid, setGrid] = useState(() => genGrid());
  const [isXNext, setIsXNext] = useState(true);

  const winner = checkWinner(grid.flat());

  const handleClick = (row, col) => {
    if (grid[row][col] || winner) return;

    setGrid((prev) => {
      let temp = prev.map((val) => [...val]);
      temp[row][col] = isXNext ? "X" : "0";
      return temp;
    });

    setIsXNext(!isXNext);
  };

  return (
    <div className="cont">
      {winner && <h2>Winner: {winner}</h2>}
      <h4>Current turn: {isXNext ? "X" : "0"}</h4>
      <div className="grid-cont">
        {grid.map((row, rowId) => (
          <div key={rowId}>
            {row.map((col, colId) => (
              <button
                key={colId}
                onClick={() => handleClick(rowId, colId)}
                className="cell"
              >
                {col}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTac;

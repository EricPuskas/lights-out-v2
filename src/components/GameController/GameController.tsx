import { useState, useEffect } from "react";

/**
 * Imports components
 */
import { Board } from "../Board";

/**
 * Imports types
 */
import { Cell } from "../../types";

/**
 * Imports hooks
 */
import { useLocalStorage } from "../../hooks";

/**
 * Displays the component
 */
export const GameController: React.FC = () => {
  /**
   * Initializes the board state
   */
  const [board, setBoard] = useState<Cell[][]>([]);

  /**
   * Initializes the grid size
   */
  const [gridSize, setGridSize] = useLocalStorage("gridSize", 5);

  /**
   * Handles the change of the grid size
   */
  const changeGridSize = (size: number) => {
    setGridSize(size);
    initializeBoard(size);
  };

  /**
   * Handles the initialization of the board
   */
  const initializeBoard = (gridSize: number) => {
    const board: Cell[][] = [];

    for (let i = 0; i < gridSize; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < gridSize; j++) {
        row.push({
          active: Math.random() < 0.25,
          positionX: i,
          positionY: j
        });
      }
      board.push(row);
    }

    setBoard(board);
  };

  /**
   * Handles the initialization of the board
   */
  useEffect(() => {
    initializeBoard(gridSize);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1> Lights Out - {gridSize} </h1>
      <div>
        <h2 onClick={() => changeGridSize(3)}> 3x3 </h2>
        <h2 onClick={() => changeGridSize(5)}> 5x5 </h2>
        <h2 onClick={() => changeGridSize(9)}> 9x9 </h2>
      </div>
      <Board board={board} />
    </div>
  );
};

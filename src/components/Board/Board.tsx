/**
 * Imports components
 */
import { BoardRow } from "../BoardRow";

/**
 * Imports styled components
 */
import { Container } from "./Board.styles";

/**
 * Imports types
 */
import { BoardProps } from "./Board.types";

/**
 * Displays the component
 */
export const Board: React.FC<BoardProps> = (props) => {
  const { board } = props;

  /**
   * Handles the rendering of the board
   */
  const renderBoard = () => {
    return board.map((row, key) => <BoardRow key={key} row={row} />);
  };

  return <Container>{renderBoard()}</Container>;
};

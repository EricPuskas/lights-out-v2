/**
 * Imports styled components
 */
import { Container } from "./BoardCell.styles";

/**
 * Imports types
 */
import { BoardCellProps } from "./BoardCell.types";

/**
 * Displays the component
 */
export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell } = props;

  return (
    <Container>
      <div>{cell.positionX}</div>
      <div>{cell.positionY}</div>
    </Container>
  );
};

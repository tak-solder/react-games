import './Board.scss';
import * as React from 'react';
import * as Types from "../../Types";
import Cell from "./Cell";

type Props = {
  cells: Types.field;
  setCell: (row: number, column: number) => boolean;
  latestHand: Types.latestHand
}

const Board: React.FC<Props> = ({cells, setCell, latestHand}) => (
  <table className="Board">
    <tbody>
    <tr>
      <td/>
      {'abcdefgh'.split('').map(index => (
        <td key={index}
            className="Board-index Board-index_column"
        >
          {index}
        </td>
      ))}
    </tr>
    {cells.map((row: number[], i: number) => (
      <tr key={i}>
        <td className="Board-index Board-index_row">{i + 1}</td>
        {row.map((column: number, s: number) => (
          <Cell key={s}
                territory={column}
                onClick={() => {
                  if (!setCell(i, s)) {
                    alert('そこには置けないよ');
                  }
                }}
                latest={latestHand.cell.row === i && latestHand.cell.column === s}
          />
        ))}
      </tr>
    ))}
    </tbody>
  </table>
);

export default Board;

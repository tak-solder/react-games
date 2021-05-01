import './Board.scss';
import * as React from 'react';
import {useState} from "react";

const defaultCells = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, -1, 1, 0, 0, 0],
  [0, 0, 0, 1, -1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const Board = () => {
  return (
    <div className="Board">

      <Field/>
    </div>
  );
};

const Field = () => {
  const [cells, setCells] = useState(defaultCells);

  return (
  <table className="Board-Field">
    <tbody>
    {cells.map((row, i) => (
      <tr key={i}>
        {row.map((column, s) => (
          <Cell key={s}
                territory={column}
                onClick={() => {
                  const newCells = cells.slice();
                  newCells[i][s] = 1;
                  setCells(newCells);
                }}
          />
        ))}
      </tr>
    ))}
    </tbody>
  </table>
)};

type CellProps = {
  territory: number;
  onClick: () => void;
}
const Cell = ({territory, onClick}: CellProps) => {
  const classNames = ['Board-Stone'];

  if (territory === 0) {
    return (
      <td className="Board-Cell"
          onClick={onClick}
      />
    );
  }

  if (territory > 0) {
    classNames.push('Board-Stone_Black');
  } else if (territory < 0) {
    classNames.push('Board-Stone_White');
  }
  return (
    <td className="Board-Cell">
      <div className={classNames.join(' ')} />
    </td>
  );
};


export default Board;

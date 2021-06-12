import styles from './Board.scss';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import * as Defines from "../../Defines";
import Cell from "./Cell";
import {State, putDisc} from "../../Store";

const Board: React.FC = () => {
  const board = useSelector((state: State) => state.board);
  const recentPosition = useSelector((state: State) => state.histories[0])?.position;
  const dispatch = useDispatch();

  console.log(JSON.stringify(board));

  return (
    <table className={styles.Board}>
      <tbody>
      <tr>
        <td/>
        {Defines.IndexStr.x.map(index => (
          <td key={index}
              className={styles.Index_column}
          >
            {index}
          </td>
        ))}
      </tr>
      {board.map((row: number[], y: number) => (
        <tr key={y}>
          <td className={styles.Index_row}>{y + 1}</td>
          {row.map((column: number, x: number) => (
            <Cell key={x}
                  disc={column}
                  onClick={() => {
                    dispatch(putDisc({x, y}))
                  }}
                  recent={recentPosition && recentPosition.x === x && recentPosition.y === y}
            />
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Board;

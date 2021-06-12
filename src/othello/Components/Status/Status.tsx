import * as React from 'react';
import Player from "./Player";
import * as Defines from "../../Defines";
import {useSelector} from "react-redux";
import {State} from "../../Store";
import {countDisc} from "../../Logic";
import styles from './Status.scss';

const Status: React.FC = () => {
  const board = useSelector((state: State) => state.board);
  const turnPlayer = useSelector((state: State) => state.player);

  return (
    <table className={styles.Status}>
      <tbody>
      {Object.values(Defines.Player).map(player => (
        <Player key={player}
                player={player}
                count={countDisc(board, player)}
                ownTurn={turnPlayer === player}
        />
      ))}
      </tbody>
    </table>
  );
};

export default Status;

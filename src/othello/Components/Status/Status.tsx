import './Status.scss';
import * as React from 'react';
import * as Types from "../../Types";
import Player from "./Player";
import * as Defines from "../../Defines";

type Props = {
  cells: Types.field;
  turnPlayer: number;
}

const Status: React.FC<Props> = ({cells, turnPlayer}) => {
  const count = (player: number) => cells.map(row => row.filter(color => color === player).length)
    .reduce((sum, length) => sum + length);

  return (
    <table className="Status">
      <tbody>
      {Object.values(Defines.Player).map(player => (
        <Player key={player}
                player={player}
                count={count(player)}
                ownTurn={player === turnPlayer}
        />
      ))}
      </tbody>
    </table>
  );
};

export default Status;

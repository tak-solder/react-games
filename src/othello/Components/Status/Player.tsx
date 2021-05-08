import * as React from 'react';
import * as Defines from "../../Defines";

type Props = {
  player: number;
  count: number;
  ownTurn: boolean;
}

const Player: React.FC<Props> = ({player, count, ownTurn}) => {
  const classNames = ['Status-Player'];
  if (ownTurn) {
    classNames.push('Status-Player_turn')
  }

  const playerStr = player === Defines.Player.Black
    ? '先手プレイヤー（黒）'
    : '後手プレイヤー（白）';

  return (
    <tr className={classNames.join(' ')}>
      <td className='Status-Player-Name'>
        {playerStr}
      </td>
      <td className='Status-Player-Count'>
        {count}個
      </td>
    </tr>
  );
};

export default Player;

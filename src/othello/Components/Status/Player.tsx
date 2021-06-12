import * as React from 'react';
import * as Defines from "../../Defines";
import styles from './Status.scss';

type Props = {
  player: number;
  count: number;
  ownTurn: boolean;
}

const Player: React.FC<Props> = ({player, count, ownTurn}) => {
  const classNames = [styles.Player];
  if (ownTurn) {
    classNames.push(styles.Player_turn)
  }

  const playerStr = player === Defines.Player.Black
    ? '先手プレイヤー（黒）'
    : '後手プレイヤー（白）';

  return (
    <tr className={classNames.join(' ')}>
      <td className={styles.Name}>
        {playerStr}
      </td>
      <td className={styles.Count}>
        {count}個
      </td>
    </tr>
  );
};

export default Player;

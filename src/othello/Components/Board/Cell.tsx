import * as React from "react";
import Disc from "./Disc";
import styles from './Board.scss';

type Props = {
  disc: number;
  onClick: () => void;
  recent: boolean
}

const Cell: React.FC<Props> = ({disc, onClick, recent}) => {
  const classNames = [styles.Cell];

  if (disc === 0) {
    return (
      <td className={classNames.join(' ')}
          onClick={onClick}
      />
    );
  }

  if (recent) {
    classNames.push(styles.Cell_recent)
  }

  return (
    <td className={classNames.join(' ')}>
      <Disc disc={disc}/>
    </td>
  );
};

export default Cell;

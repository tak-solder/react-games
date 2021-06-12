import * as React from "react";
import styles from './Board.scss';

type Props = {
  disc: number;
}

const Disc: React.FC<Props> = ({disc}) => {
  const classNames = [styles.Disc];

  if (disc > 0) {
    classNames.push(styles.Disc_Black);
  } else if (disc < 0) {
    classNames.push(styles.Disc_White);
  } else {
    return null;
  }

  return (<div className={classNames.join(' ')}/>);
}

export default Disc;

import * as React from "react";
import {useSelector} from "react-redux";
import {State} from "../../Store";
import {History} from "../../Types";
import {IndexStr} from "../../Defines";
import styles from "./History.scss";

const History: React.FC = () => {
  const histories = useSelector((state: State) => state.histories);

  return (
    <ol className={styles.History} reversed={true}>
      {histories.map((history, i) => <HistoryItem key={i} history={history}/>)}
    </ol>
  );
};

type Props = {
  history: History;
}
const HistoryItem: React.FC<Props> = ({history}) => {
  const classNames = [styles.Item];

  if (history.player > 0) {
    classNames.push(styles.Item_Black);
  } else {
    classNames.push(styles.Item_White);
  }

  const x = IndexStr.x[history.position.x];
  const y = IndexStr.y[history.position.y];

  return (
    <li className={classNames.join(' ')}>
      {x}-{y}
    </li>
  );
}

export default History;

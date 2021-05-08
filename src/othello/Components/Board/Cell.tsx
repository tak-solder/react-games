import * as React from "react";
import Stone from "./Stone";

type Props = {
  territory: number;
  onClick: () => void;
  latest: boolean
}

const Cell: React.FC<Props> = ({territory, onClick, latest}) => {
  const classNames = ['Board-Cell'];

  if (territory === 0) {
    return (
      <td className={classNames.join(' ')}
          onClick={onClick}
      />
    );
  }

  if (latest) {
    classNames.push('Board-Cell_latest')
  }

  return (
    <td className={classNames.join(' ')}>
      <Stone territory={territory}/>
    </td>
  );
};

export default Cell;

import * as React from "react";

type Props = {
  territory: number;
}

const Stone: React.FC<Props> = ({territory}) => {
  const classNames = ['Board-Stone'];

  if (territory > 0) {
    classNames.push('Board-Stone_Black');
  } else if (territory < 0) {
    classNames.push('Board-Stone_White');
  } else {
    return null;
  }

  return (<div className={classNames.join(' ')}/>);
}

export default Stone;

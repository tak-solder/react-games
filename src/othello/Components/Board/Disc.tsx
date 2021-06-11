import * as React from "react";

type Props = {
  disc: number;
}

const Disc: React.FC<Props> = ({disc}) => {
  const classNames = ['Board-Disc'];

  if (disc > 0) {
    classNames.push('Board-Disc_Black');
  } else if (disc < 0) {
    classNames.push('Board-Disc_White');
  } else {
    return null;
  }

  return (<div className={classNames.join(' ')}/>);
}

export default Disc;

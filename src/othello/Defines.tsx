import * as Types from "./Types";

type DefPlayer = {
  Black: Types.Player,
  White: Types.Player,
}

const Player: DefPlayer = {
  Black: 1,
  White: -1,
};

type DefDisc = {
  Black: Types.Disc,
  White: Types.Disc,
  Empty: Types.Disc,
}


const Cell: DefDisc = {
  Black: 1,
  White: -1,
  Empty: 0,
};

const Directions: Array<Types.Direction> = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

export {Player, Cell, Directions};

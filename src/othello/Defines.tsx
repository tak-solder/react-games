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

const IndexStr = {
  x: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  y: ['1', '2', '3', '4', '5', '6', '7', '8'],
};

export {Player, Cell, Directions, IndexStr};

const Player = {
  Black: 1,
  White: -1,
};

const Cell = {
  Black: 1,
  White: -1,
  Empty: 0,
};

const Directions = [
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

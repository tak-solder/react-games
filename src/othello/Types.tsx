type Player = -1 | 1;
type Disc = -1 | 0 | 1;

type Line = [Disc, Disc, Disc, Disc, Disc, Disc, Disc, Disc];
type Board = [Line, Line, Line, Line, Line, Line, Line, Line];

type Position = {
  x: number,
  y: number,
};

type Direction = [
    -1 | 0 | 1,
    -1 | 0 | 1
];

type History = {
  player: Player,
  position: Position,
};

export {Player, Disc, Board, Direction, Position, History};

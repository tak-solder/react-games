type Player = -1 | 1;
type Disc = -1 | 0 | 1;

type Line = [Disc, Disc, Disc, Disc, Disc, Disc, Disc, Disc];
type Board = [Line, Line, Line, Line, Line, Line, Line, Line];

type Index = [0, 1, 2, 3, 4, 5, 6, 7];
type Position = {
  // xIndex: Index,
  // yIndex: Index,
  xIndex: number,
  yIndex: number,
};

type Direction = [
    -1 | 0 | 1,
    -1 | 0 | 1
];

type History = {
  player: Player,
  position: Position,
};

type State = {
  board: Board,
  histories: Array<History>,
  player: Player | null,
  finished: boolean,
};


export {Player, Disc, Index, Board, Direction, Position, History, State};

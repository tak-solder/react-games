import * as Defines from './Defines';

type Player = typeof Defines.Player[keyof typeof Defines.Player];
type Disc = typeof Defines.Disc[keyof typeof Defines.Disc];

const Index: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];
type Index = [0, 1, 2, 3, 4, 5, 6, 7];

type Line = [Disc, Disc, Disc, Disc, Disc, Disc, Disc, Disc];
type Board = [Line, Line, Line, Line, Line, Line, Line, Line];

type Position = {
  xIndex: Index,
  yIndex: Index,
};

type Log = {
  player: Player,
  position: Position,
};

type LogHistories = Array<History>;

type State = {
  board: Board,
  histories: LogHistories,
  player: Player | null,
};


export {Player, Disc, Index, Board, Position, Log, LogHistories, State};

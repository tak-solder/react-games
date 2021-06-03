import * as Defines from "./Defines";
import * as Types from "./Types";

const canReverse = (board: Types.Board, player: Types.Player, position: Types.Position, [x, y]: Types.Direction): boolean => {
  const opponent: Types.Player = player * -1 as Types.Player;
  if (position.yIndex + y < 0 || position.xIndex + x < 0) {
    return false;
  }
  if (board[position.yIndex + y][position.xIndex + x] !== opponent) {
    return false;
  }
  for (let i = 2; true; i++) {
    if (position.yIndex + (y * i) < 0 || position.xIndex + (x * i) < 0) {
      return false;
    }
    const cell = board[position.yIndex + (y * i)][position.xIndex + (x * i)];
    if (cell === player) {
      return true;
    }
    if (cell !== Defines.Cell.Empty) {
      return false;
    }
  }
}

const canPut = (board: Types.Board, player: Types.Player, position: Types.Position): boolean => {
  return !!Defines.Directions.find(direction => canReverse(board, player, position, direction));
};

const putableCellExists = (board: Types.Board, player: Types.Player): boolean =>
  board.some((line, yIndex) =>
    line.some((disc, xIndex) =>
      disc === 0 && canPut(board, player, {xIndex: xIndex, yIndex}))
  );

const reverse = (board: Types.Board, player: Types.Player, position: Types.Position): Types.Board => {
  Defines.Directions.filter(direction => canReverse(board, player, position, direction))
    .forEach(([y, x]: Array<number>) => {
      const opponent = player * -1;
      for (let i = 1; true; i++) {
        const cell = board[row + (y * i)][column + (x * i)];
        if (cell === opponent) {
          board[row + (y * i)][column + (x * i)] = player;
        } else {
          return;
        }
      }
    })
  return board
};


const putDisc = (board: Types.Board, player: Types.Player, position: Types.Position): boolean => {
  if (board[row][column] !== 0 || !canPut(board, turnPlayer, row, column)) {
    return false;
  }

  const newboard = board.map(row => row.slice());
  newboard[row][column] = turnPlayer;
  reverse(newboard, turnPlayer, row, column);

  updateboard(newboard);
  updateHand({
    player: turnPlayer,
    cell: {
      row,
      column
    }
  });

  const nextPlayer = turnPlayer * -1;
  if (putableCellExists(newCells, nextPlayer)) {
    updatePlayer(nextPlayer);
  } else if (!putableCellExists(newCells, turnPlayer)) {
    updatePlayer(0);
    updateFinished(true);
  }

  return true;
}

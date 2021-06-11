import * as Defines from "./Defines";
import * as Types from "./Types";

const canReverse = (board: Types.Board, player: Types.Player, position: Types.Position, [x, y]: Types.Direction): boolean => {
  const opponent: Types.Player = player * -1 as Types.Player;
  if (position.y + y < 0 || position.x + x < 0) {
    return false;
  }
  if (!board[position.y + y] || board[position.y + y][position.x + x] !== opponent) {
    return false;
  }
  for (let i = 2; true; i++) {
    const posX = position.x + (x * i);
    const posY = position.y + (y * i);
    if (!board[posY]) {
      return false;
    }

    const cell = board[posY][posX];
    if (cell === player) {
      return true;
    }
    if (cell !== opponent) {
      return false;
    }
  }
}

const canPut = (board: Types.Board, player: Types.Player, position: Types.Position): boolean => {
  return !!Defines.Directions.find(direction => canReverse(board, player, position, direction));
};

const putableCellExists = (board: Types.Board, player: Types.Player): boolean => {
  return board.some((line, y) =>
    line.some((disc, x) =>
      disc === 0 && canPut(board, player, {x, y}))
  );
}


const putDisc = (board: Types.Board, player: Types.Player, position: Types.Position): Types.Board | null => {
  if (board[position.y][position.x] !== 0 || !canPut(board, player, position)) {
    return null;
  }

  const newBoard: Types.Board = board.map(row => row.slice()) as Types.Board;
  newBoard[position.y][position.x] = player;

  Defines.Directions.filter(direction => canReverse(newBoard, player, position, direction))
    .forEach(([x, y]: Array<number>) => {
      const opponent: Types.Player = player * -1 as Types.Player;
      for (let i = 1; true; i++) {
        const posX = position.x + (x * i);
        const posY = position.y + (y * i);
        if (!board[posY]) {
          return false;
        }

        const cell = board[posY][posX];
        if (cell === opponent) {
          newBoard[posY][posX] = player;
        } else if (cell === player) {
          return;
        } else {
          throw "処理エラー";
        }
      }
    });

  return newBoard;
}

const countDisc = (board: Types.Board, player: Types.Player) => {
  return board.map(row => row.filter(disc => disc === player).length)
    .reduce((sum, length) => sum + length);
}

export {canReverse, canPut, putableCellExists, putDisc, countDisc};

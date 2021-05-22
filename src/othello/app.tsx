import './app.scss';
import {render} from "react-dom";
import * as React from 'react';
import {FC, useState, Fragment} from "react";
import Board from "./Components/Board/Board";
import Status from "./Components/Status/Status";
import * as Defines from "./Defines";
import * as Types from "./Types";

const defaultField = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, -1, 1, 0, 0, 0],
  [0, 0, 0, 1, -1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const App: FC = () => {
  const [latestHand, updateHand] = useState({
    player: 0,
    cell: {
      row: 0,
      column: 0,
    },
  });
  const [cells, updateCells] = useState<field>(defaultField);
  const [turnPlayer, updatePlayer] = useState<number>(Player.Black);
  const [finished, updateFinished] = useState<boolean>(false);

  const setCell = (row: number, column: number): boolean => {
    if (finished) {
      return true;
    }

    if (cells[row][column] !== 0 || !canPut(cells, turnPlayer, row, column)) {
      return false;
    }

    const newCells = cells.map(row => row.slice());
    newCells[row][column] = turnPlayer;
    reverse(newCells, turnPlayer, row, column);

    updateCells(newCells);
    updateHand({
      player: turnPlayer,
      cell: {
        row,
        column
      }
    });

    // console.log(JSON.stringify(newCells));
    const nextPlayer = turnPlayer * -1;
    if (putableCellExists(newCells, nextPlayer)) {
      updatePlayer(nextPlayer);
    } else if (!putableCellExists(newCells, turnPlayer)) {
      updatePlayer(0);
      updateFinished(true);
    }

    return true;
  }

  return (
    <Fragment>
      <div className="App">
        <div className="App-board">
          <Board cells={cells} setCell={setCell} latestHand={latestHand}/>
        </div>
        <div className="App-status">
          <Status cells={cells} turnPlayer={turnPlayer}/>
        </div>
      </div>
      {finished && (
        <div className="App-finished">
          ゲーム終了
        </div>
      )}
    </Fragment>
  );
};

const reverse = (cells: field, player: number, row: number, column: number): void => {
  Directions.filter(direction => canReverse(cells, player, row, column, direction))
    .forEach(([y, x]: Array<number>) => {
      const opponent = player * -1;
      for (let i = 1; true; i++) {
        const cell = cells[row + (y * i)][column + (x * i)];
        if (cell === opponent) {
          cells[row + (y * i)][column + (x * i)] = player;
        } else {
          return;
        }
      }
    });
};

const canPut = (cells: field, player: number, row: number, column: number): boolean => {
  return !!Directions.find(direction => canReverse(cells, player, row, column, direction));
};

const putableCellExists = (cells: field, player: number): boolean =>
  cells.some((columns, row) =>
    columns.some((stone, column) =>
      stone === 0 && canPut(cells, player, row, column))
  );

const canReverse = (cells: field, player: number, row: number, column: number, [y, x]: Array<number>): boolean => {
  const opponent = player * -1;
  if (cells[row + y] === undefined) {
    return false;
  }
  if (cells[row + y][column + x] !== opponent) {
    return false;
  }
  for (let i = 2; true; i++) {
    if (cells[row + (y * i)] === undefined) {
      return false;
    }
    const cell = cells[row + (y * i)][column + (x * i)];
    if (cell === player) {
      return true;
    }
    if (cell !== opponent) {
      return false;
    }
  }
}

render(
  <App/>,
  document.querySelector('#app')
);

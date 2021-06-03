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

render(
  <App/>,
  document.querySelector('#app')
);

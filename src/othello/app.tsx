import './app.scss';
import {render} from "react-dom";
import * as React from 'react';
import {FC, useState, Fragment} from "react";
import Board from "./Components/Board/Board";
import Status from "./Components/Status/Status";
import History from "./Components/History/History";
import {Provider, useSelector} from "react-redux";
import store from "./Store";
import {State} from "./Store";
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
  const finished = useSelector((state: State) => state.finished);

  return (
    <Fragment>
      <div className="App">
        <div className="App-board">
          <Board/>
        </div>
        <div className="App-status">
          <Status/>
          <History/>
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
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);

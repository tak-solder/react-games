import './app.scss';
import {render} from "react-dom";
import * as React from 'react';
import Board from "./Components/Board/Board";

const App = () => {
  return (
    <div>
      <Board/>
    </div>
  );
};

render(
  <App />,
  document.querySelector('#app')
);

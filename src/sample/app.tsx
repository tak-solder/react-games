import './app.scss';
import {render} from "react-dom";
import * as React from 'react';

const App = () => {
  return (
    <div>
      Hello World!
    </div>
  );
};

render(
  <App />,
  document.querySelector('.sample')
);

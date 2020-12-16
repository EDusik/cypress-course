import React from 'react';
import ReactDOM from 'react-dom';

import { makeServer } from './server';
import GlobalStyle from './styles/Globals/Globals';
import App from './App';

if ((window).Cypress) {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

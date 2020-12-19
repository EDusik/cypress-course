import React from 'react';
import ReactDOM from 'react-dom';

import { makeServer } from './server';
import GlobalStyle from './styles/Globals/Globals';
import App from './App';

import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';

if ((window).Cypress) {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

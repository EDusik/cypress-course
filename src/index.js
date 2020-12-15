import { Server } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import { makeServer } from './server';
import App from './App';

if (window.Cypress) {
  // mirage cypress server
  let cyServer = new Server({
    routes() {
      ['get', 'put', 'patch', 'post', 'delete'].forEach(method => {
        this[method]('/*', (schema, request) => {
          return window.handleFromCypress(request);
        });
      });
    }
  });
  cyServer.logging = false;
} else if (!process.env.REACT_APP_PROXY) {
  // mirage dev server
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



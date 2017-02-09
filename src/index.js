// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import 'materialize-css/dist/js/materialize.min.js';
// import 'materialize-css/sass/materialize.scss';

import App from './components/app';
import store from './store';
import './style/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector('.container'));

// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import 'materialize-css/sass/materialize.scss';

import App from './components/app';
import './style/style.scss';
import rootReducer from './reducers';

const enhancer = compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, enhancer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector('.container'));


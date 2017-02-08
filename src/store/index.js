import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, enhancer);
window.store = store;

export default store;

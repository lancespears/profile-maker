import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(thunk, promise),
window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));

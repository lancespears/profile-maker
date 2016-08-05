import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

import rootReducer from './reducers/index';
import routes from './routes';
import '../style/style.css';

const createStoreWithMiddleware = compose(applyMiddleware(thunk, promise),
window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
     <Provider store={store}>
      <Router
          onUpdate={() => window.scrollTo(0, 0)}
          history={browserHistory}
          routes={routes} />
      </Provider>
    , document.getElementById('root'));

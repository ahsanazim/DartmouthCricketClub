// at top
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

// this creates the store with the reducers, and does some other stuff to initialize devtools
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// replace ReactDOM.render with:
// entry point that just renders app
// could be used for routing at some point
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('main'));

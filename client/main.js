import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from './reducers';
import rootSaga from './sagas';

import Presentation from './components/presentation';
import Presentations from './components/presentations';

import './styles/base.scss';
import './styles/code.scss';

const rootEl = document.getElementById('root');
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(
    createLogger(),
    sagaMiddleware,
    routerMiddleware(browserHistory)
  )
);

sagaMiddleware.run(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Presentations}/>
      <Route path=":presentation/:currentSlide" component={Presentation}/>
    </Router>
  </Provider>,
  rootEl
);

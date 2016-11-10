import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import slidesReducer from './reducer'
import controlMiddleware from './control-middleware'
import Presentation from './components/presentation'

import './styles/base.scss'
import './styles/code.scss'

const rootEl = document.getElementById('root')

const store = createStore(
  combineReducers({
    slides: slidesReducer,
    routing: routerReducer
  }),
  applyMiddleware(
    createLogger(),
    controlMiddleware,
    routerMiddleware(browserHistory)
  )
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Presentation}/>
    </Router>
  </Provider>,
  rootEl
)

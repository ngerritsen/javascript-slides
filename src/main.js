import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import store from './store'
import Presentation from './components/presentation'

import './styles/base.scss'

const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Presentation}/>
    </Router>
  </Provider>,
  rootEl
)

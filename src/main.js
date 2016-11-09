import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Presentation from './components/presentation'
import store from './store'

import './styles/base.scss'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Presentation/>
  </Provider>,
rootEl)

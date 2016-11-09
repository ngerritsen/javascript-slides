import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import reducer from './reducer'
import controlMiddleware from './control-middleware'

export default createStore(reducer, applyMiddleware(
  createLogger(),
  controlMiddleware
))

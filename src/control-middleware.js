import { NEXT_SLIDE, PREVIOUS_SLIDE } from './constants'

const ENTER = 13
const ARROW_LEFT = 37
const ARROW_RIGHT = 39

export default function controlMiddleware(store) {
  window.addEventListener('keydown', event => handleKeyPress(event, store))
  return next => action => next(action)
}

function handleKeyPress(event, store) {
  const keyCode = event.keyCode

  if (keyCode === ARROW_LEFT) {
    store.dispatch({ type: PREVIOUS_SLIDE })
  }

  if (keyCode === ARROW_RIGHT || keyCode === ENTER) {
    store.dispatch({ type: NEXT_SLIDE })
  }
}

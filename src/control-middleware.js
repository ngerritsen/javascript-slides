import { push } from 'react-router-redux'

const ENTER = 13
const ARROW_LEFT = 37
const ARROW_RIGHT = 39

export default function controlMiddleware(store) {
  window.addEventListener('keydown', event => handleKeyPress(event, store))
  return next => action => next(action)
}

function handleKeyPress(event, store) {
  const keyCode = event.keyCode
  const { totalSlides, routing } = store.getState()
  const currentSlide = getSlide(routing.locationBeforeTransitions)

  if (keyCode === ARROW_LEFT && currentSlide > 0) {
    store.dispatch(push('/' + (currentSlide - 1)))
  }

  if ((keyCode === ARROW_RIGHT || keyCode === ENTER) && currentSlide < totalSlides - 1) {
    store.dispatch(push('/' + (currentSlide + 1)))
  }
}

function getSlide(location) {
  if (!location) {
    return 0
  }

  const slide = Number(location.pathname.slice(1))
  return isNaN(slide) ? 0 : slide
}

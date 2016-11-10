import { push } from 'react-router-redux'

import { getCurrentSlide } from './helpers'

const ENTER = 13
const ARROW_LEFT = 37
const ARROW_RIGHT = 39

export default function controlMiddleware(store) {
  window.addEventListener('keydown', event => handleKeyPress(event, store))
  return next => action => next(action)
}

function handleKeyPress(event, store) {
  const keyCode = event.keyCode
  const { slides, routing } = store.getState()
  const currentSlide = getCurrentSlide(routing.locationBeforeTransitions)
  console.log(slides, routing.locationBeforeTransitions, currentSlide);
  if (keyCode === ARROW_LEFT && currentSlide > 0) {
    store.dispatch(push('/?slide=' + (currentSlide - 1)))
  }

  if ((keyCode === ARROW_RIGHT || keyCode === ENTER) && currentSlide < slides.totalSlides - 1) {
    store.dispatch(push('/?slide=' + (currentSlide + 1)))
  }
}

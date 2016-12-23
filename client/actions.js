import * as constants from './constants'

export function setTotalSlides(totalSlides) {
  return {
    type: constants.SET_TOTAL_SLIDES,
    totalSlides
  }
}

export function fetchPresentation(presentationName) {
  return {
    type: constants.FETCH_PRESENTATION,
    presentationName
  }
}

export function fetchPresentationSucceeded(slides) {
  return {
    type: constants.FETCH_PRESENTATION_SUCCEEDED,
    slides
  }
}

export function fetchPresentations() {
  return {
    type: constants.FETCH_PRESENTATIONS
  }
}

export function fetchPresentationsSucceeded(presentations) {
  return {
    type: constants.FETCH_PRESENTATIONS_SUCCEEDED,
    presentations
  }
}

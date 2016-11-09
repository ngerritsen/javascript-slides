import { SET_TOTAL_SLIDES } from './constants'

export function setTotalSlides(totalSlides) {
  return {
    type: SET_TOTAL_SLIDES,
    totalSlides
  }
}

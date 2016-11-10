import { SET_TOTAL_SLIDES } from './constants'

export default function totalSlidesReducer(state = 0, action) { // eslint-disable-line complexity
  if (action.type === SET_TOTAL_SLIDES) {
    return action.totalSlides
  }

  return state
}

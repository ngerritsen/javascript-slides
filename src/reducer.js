import { SET_TOTAL_SLIDES } from './constants'

const initialState = {
  totalSlides: 0,
  currentSlide: 0
}

export default function reducer(state = initialState, action) { // eslint-disable-line complexity
  switch (action.type) {
    case SET_TOTAL_SLIDES:
      return {
        ...state,
        totalSlides: action.totalSlides,
        currentSlide: 0
      }
    default:
      return state
  }
}

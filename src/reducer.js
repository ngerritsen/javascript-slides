import { NEXT_SLIDE, PREVIOUS_SLIDE, SET_TOTAL_SLIDES } from './constants'

const initialState = {
  totalSlides: 0,
  currentSlide: 0
}

export default function reducer(state = initialState, action) { // eslint-disable-line complexity
  switch (action.type) {
    case NEXT_SLIDE:
      return {
        ...state,
        currentSlide: state.currentSlide < state.totalSlides - 1 ? state.currentSlide + 1 : state.currentSlide
      }
    case PREVIOUS_SLIDE:
      return {
        ...state,
        currentSlide: state.currentSlide > 0 ? state.currentSlide - 1 : state.currentSlide
      }
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

import { NEXT_SLIDE, PREVIOUS_SLIDE } from './constants'

export default function reducer(state = { slide: 0 }, action) {
  switch (action.type) {
    case NEXT_SLIDE:
      return {
        ...state,
        slide: state.slide + 1
      }
    case PREVIOUS_SLIDE:
      return {
        ...state,
        slide: state.slide - 1
      }
    default:
      return state
  }
}

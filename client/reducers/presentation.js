import { FETCH_PRESENTATION_SUCCEEDED, FETCH_PRESENTATION } from '../constants';

const initialState = {
  name: null,
  slides: null
};

export default function presentationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRESENTATION:
      return {
        name: action.presentationName,
        slides: null
      };
    case FETCH_PRESENTATION_SUCCEEDED:
      return {
        ...state,
        slides: action.slides
      };
    default:
      return state;
  }
}

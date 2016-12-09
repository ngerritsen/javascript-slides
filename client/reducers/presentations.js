import { FETCH_PRESENTATIONS_SUCCEEDED } from '../constants';

export default function presentationsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PRESENTATIONS_SUCCEEDED:
      return action.presentations;
    default:
      return state;
  }
}

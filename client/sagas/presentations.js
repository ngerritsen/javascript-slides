import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

import { FETCH_PRESENTATIONS, FETCH_PRESENTATION } from '../constants'
import * as actions from '../actions'

export function *presentationSaga() {
  yield takeEvery(FETCH_PRESENTATION, fetchPresentation)
}

export function *presentationsSaga() {
  yield* fetchPresentations()
  yield takeEvery(FETCH_PRESENTATIONS, fetchPresentations)
}

function *fetchPresentation({ presentationName }) {
  const slides = yield fetch(`/api/presentations/${presentationName}`).then(res => res.json())
  yield put(actions.fetchPresentationSucceeded(slides))
}

function *fetchPresentations() {
  const presentations = yield fetch('/api/presentations').then(res => res.json())
  yield put(actions.fetchPresentationsSucceeded(presentations))
}

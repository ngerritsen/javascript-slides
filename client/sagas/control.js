import { eventChannel } from 'redux-saga';
import { call, put, select, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';

const ENTER = 13;
const BACKSPACE = 8;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const ESCAPE = 27;

export function *keySaga() {
  const keyChannel = yield call(createKeyChannel);

  while (true) { // eslint-disable-line no-constant-condition
    const keyCode = yield take(keyChannel);

    const { routing, presentation } = yield select(state => state);
    const action = determineAction(routing, presentation, keyCode);

    if (action) {
      yield put(action);
    }
  }
}

function determineAction({ locationBeforeTransitions: location }, presentation, keyCode) {
  if (!isOnSlideshow(location)) {
    return;
  }

  const navigationAction = determineNavigationAction(keyCode, location, presentation);

  if (navigationAction) {
    return navigationAction;
  }

  if (keyCode === ESCAPE) {
    return push('/');
  }
}

function determineNavigationAction(keyCode, location, presentation) {
  const { currentSlide, totalSlides } = getSlideCounts(location, presentation);

  if ((keyCode === ARROW_LEFT || keyCode === BACKSPACE) && currentSlide > 0) {
    return push(`/${presentation.name}/${currentSlide - 1}`);
  }

  if ((keyCode === ARROW_RIGHT || keyCode === ENTER) && currentSlide < totalSlides - 1) {
    return push(`/${presentation.name}/${currentSlide + 1}`);
  }
}

function isOnSlideshow(location) {
  return location && location.pathname !== '/';
}

function getSlideCounts(location, presentation) {
  return {
    currentSlide: Number(location.pathname.slice(presentation.name.length + 2)),
    totalSlides: presentation.slides ? presentation.slides.length : 0
  };
}

function createKeyChannel() {
  return eventChannel(emit => {
    window.addEventListener('keydown', event => emit(event.keyCode));
    return e => e;
  });
}

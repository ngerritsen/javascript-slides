import { presentationSaga, presentationsSaga } from './presentations';
import { keySaga } from './control';

export default function *rootSaga() {
  yield [
    presentationSaga(),
    presentationsSaga(),
    keySaga()
  ];
}

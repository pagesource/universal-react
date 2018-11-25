import { all, takeLatest } from 'redux-saga/effects';

export function* testSaga(action) {
  try {
    yield `example - ${action}`;
  } catch (err) {
    // yield put(globalDataFailure(err));
  }
}

export default function* globalSaga() {
  try {
    yield all([takeLatest('TEST', testSaga)]);
  } catch (err) {
    // yield put(globalDataFailure(err));
  }
}

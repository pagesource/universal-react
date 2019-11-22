import { put, takeEvery, call } from 'redux-saga/effects';
import { loadLearnPageSuccess, loadLearnPageFailure } from './Learn.actions';
import { LOAD_LEARN_PAGE } from './Learn.constants';
import API from '../../../utils/fetch';

export function* loadLearnPageDataSaga(action) {
  try {
    // const { slotId } = action;
    const data = yield call(API.fetch, '/b/5b613ce62b23fb1f2b6adf8a', action);
    yield put(loadLearnPageSuccess(data));
  } catch (err) {
    yield put(loadLearnPageFailure(err));
  }
}

export default function* learnPageSaga() {
  try {
    yield takeEvery(LOAD_LEARN_PAGE, loadLearnPageDataSaga);
  } catch (err) {
    yield put(loadLearnPageFailure(err));
  }
}

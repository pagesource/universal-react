import { put, takeEvery, call } from 'redux-saga/effects';
import { loadErrorPageSuccess, loadErrorPageFailure } from './ErrorPage.actions';
import { LOAD_ERROR_PAGE } from './ErrorPage.constants';
import API from '../../../utils/fetch';

export function* loadErrorPageDataSaga(action) {
  try {
    // const { slotId } = action;
    const data = yield call(API.fetch, '/b/5b613ce62b23fb1f2b6adf8a', action);
    yield put(loadErrorPageSuccess(data));
  } catch (err) {
    yield put(loadErrorPageFailure(err));
  }
}

export default function* errorPageSaga() {
  try {
    yield takeEvery(LOAD_ERROR_PAGE, loadErrorPageDataSaga);
  } catch (err) {
    yield put(loadErrorPageFailure(err));
  }
}

import { put, takeEvery, call } from 'redux-saga/effects';
import { loadFeaturesPageSuccess, loadFeaturesPageFailure } from './Features.actions';
import { LOAD_FEATURES_PAGE } from './Features.constants';
import API from '../../../utils/fetch';

export function* loadFeaturesPageDataSaga(action) {
  try {
    // const { slotId } = action;
    const data = yield call(API.fetch, '/b/5b613ce62b23fb1f2b6adf8a', action);
    yield put(loadFeaturesPageSuccess(data));
  } catch (err) {
    yield put(loadFeaturesPageFailure(err));
  }
}

export default function* featuresPageSaga() {
  try {
    yield takeEvery(LOAD_FEATURES_PAGE, loadFeaturesPageDataSaga);
  } catch (err) {
    yield put(loadFeaturesPageFailure(err));
  }
}

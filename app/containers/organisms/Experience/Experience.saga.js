import { put, takeLatest, call } from 'redux-saga/effects';
import { getExperienceSuccess, getExperienceError } from './Experience.actions';
import { GET_EXPERIENCE } from './Experience.constants';
import API_URLS from '../../../constants/api/services';
import API from '../../../utils/fetch';

export function* loadExperienceSaga(action) {
  console.log('TCL: function*loadExperienceSaga -> action', action);
  try {
    const data = yield call(API.fetch, API_URLS.experience, action, {
      params: {
        identifier: action.identifier,
      },
    });
    yield put(getExperienceSuccess(data));
  } catch (err) {
    yield put(getExperienceError(err));
  }
}

export default function* experienceSaga() {
  yield takeLatest(GET_EXPERIENCE, loadExperienceSaga);
}

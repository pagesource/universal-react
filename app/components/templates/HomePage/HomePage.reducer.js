// @flow
import { combineReducers } from 'redux';
import set from 'lodash/set';
import get from 'lodash/get';

import type {
  LoadHomeFailureAction,
  LoadSeoDataSuccessAction,
  LoadHomeEditorialDataSuccessAction,
  HomePageActions,
} from './types';
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from './HomePage.constants';

export const getFailure = (state: Object, error: LoadHomeFailureAction): Object =>
  set(state, 'error', error);

export const addLayoutData = (state: Object, data: LoadSeoDataSuccessAction): Object =>
  set(state, 'seoData', data);

export const addHomeEditorialData = (
  state: Object,
  data: LoadHomeEditorialDataSuccessAction
): Object => set(state, 'editorialData', data);

export const layout = (state: Object = {}, action: HomePageActions): Object => {
  switch (action.type) {
    case LOAD_HOME_FAILURE:
      return getFailure(state, get(action, 'error'));
    case LOAD_HOME_SEO_SUCCESS:
      return addLayoutData(state, get(action, 'data'));
    case LOAD_HOME_EDITORIAL_DATA_SUCCESS:
      return addHomeEditorialData(state, get(action, 'data'));
    default:
      return state;
  }
};

export default combineReducers({
  layout,
});

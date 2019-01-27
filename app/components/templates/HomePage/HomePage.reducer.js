// @flow
import { combineReducers } from 'redux';
import set from 'lodash/set';

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

export const getFailure = (state: Object, action: LoadHomeFailureAction): Object =>
  set(state, 'error', action.error);

export const addLayoutData = (state: Object, data: LoadSeoDataSuccessAction): Object =>
  set(state, 'seoData', data);

export const addHomeEditorialData = (
  state: Object,
  data: LoadHomeEditorialDataSuccessAction
): Object => set(state, 'editorialData', data);

export const layout = (state = {}, action: HomePageActions): Object => {
  switch (action.type) {
    case LOAD_HOME_FAILURE:
      return getFailure(state, action);
    case LOAD_HOME_SEO_SUCCESS:
      return addLayoutData(state, action.data);
    case LOAD_HOME_EDITORIAL_DATA_SUCCESS:
      return addHomeEditorialData(state, action.data);
    default:
      return state;
  }
};

export default combineReducers({
  layout,
});

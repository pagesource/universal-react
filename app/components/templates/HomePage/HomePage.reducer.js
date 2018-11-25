// @flow
import { fromJS, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
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

export const getFailure = (state: Map, action: LoadHomeFailureAction): Map =>
  state.set('error', action.error);

export const addLayoutData = (state: Map, data: LoadSeoDataSuccessAction): Map =>
  state.set('seoData', data);

export const addHomeEditorialData = (state: Map, data: LoadHomeEditorialDataSuccessAction): Map =>
  state.set('editorialData', fromJS(data));

export const layout = (state = fromJS({}), action: HomePageActions): Map => {
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

// @flow
import { fromJS, Map } from 'immutable';
import { LOAD_ERROR_PAGE_SUCCESS, LOAD_ERROR_PAGE_FAILURE } from './ErrorPage.constants';

export const setErrorPageData = (state: Map, data: any): Map => state.set('errorPageData', fromJS(data));

export const layout = (state: Object = fromJS({}), action: any = 'default'): Map => {
  switch (action.type) {
    case LOAD_ERROR_PAGE_SUCCESS:
      return setErrorPageData(state, action.data);
    case LOAD_ERROR_PAGE_FAILURE:
      return setErrorPageData(state, 'Error');
    default:
      return state;
  }
};

export default layout;

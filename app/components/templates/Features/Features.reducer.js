// @flow
import set from 'lodash/set';

import { LOAD_FEATURES_PAGE_SUCCESS, LOAD_FEATURES_PAGE_FAILURE } from './Features.constants';

export const setFeaturesPageData = (state: Object, data: any): Object =>
  set(state, 'featuresPageData', data);

export const layout = (state: Object = {}, action: any = 'default'): Object => {
  switch (action.type) {
    case LOAD_FEATURES_PAGE_SUCCESS:
      return setFeaturesPageData(state, action.data);
    case LOAD_FEATURES_PAGE_FAILURE:
      return setFeaturesPageData(state, 'Error');
    default:
      return state;
  }
};

export default layout;

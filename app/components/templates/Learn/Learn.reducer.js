// @flow
import set from 'lodash/set';

import { LOAD_LEARN_PAGE_SUCCESS, LOAD_LEARN_PAGE_FAILURE } from './Learn.constants';

export const setLearnPageData = (state: Object, data: any): Object =>
  set(state, 'learnPageData', data);

export const layout = (state: Object = {}, action: any = 'default'): Object => {
  switch (action.type) {
    case LOAD_LEARN_PAGE_SUCCESS:
      return setLearnPageData(state, action.data);
    case LOAD_LEARN_PAGE_FAILURE:
      return setLearnPageData(state, 'Error');
    default:
      return state;
  }
};

export default layout;

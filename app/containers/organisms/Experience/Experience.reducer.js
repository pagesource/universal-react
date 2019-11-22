import set from 'lodash/set';
import {
  GET_EXPERIENCE,
  GET_EXPERIENCE_SUCCESS,
  GET_EXPERIENCE_ERROR,
} from './Experience.constants';

const initialState = {
  isFetching: false,
};

export const experienceReducer = (state = initialState, { type, identifier, data, error }) => {
  switch (type) {
    case GET_EXPERIENCE:
      return set(state, 'isFetching', true);
    case GET_EXPERIENCE_SUCCESS:
      return set(state, `${identifier}.data`, data);
    case GET_EXPERIENCE_ERROR:
      return set(state, `${identifier}.error`, error);
    default:
      return state;
  }
};

export default experienceReducer;

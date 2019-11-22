import {
  GET_EXPERIENCE,
  GET_EXPERIENCE_SUCCESS,
  GET_EXPERIENCE_ERROR,
  REMOVE_EXPERIENCE,
} from './Experience.constants';

export const getExperience = identifier => {
  return {
    type: GET_EXPERIENCE,
    identifier,
  };
};

export const getExperienceSuccess = (identifier, data) => ({
  type: GET_EXPERIENCE_SUCCESS,
  identifier,
  data,
});

export const getExperienceError = error => ({
  type: GET_EXPERIENCE_ERROR,
  error,
});

export const removeExperience = identifier => ({
  type: REMOVE_EXPERIENCE,
  identifier,
});

export default [getExperience];

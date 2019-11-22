/*
 *
 * LearnPage actions
 *
 */
// @flow
import {
  LOAD_LEARN_PAGE,
  LOAD_LEARN_PAGE_SUCCESS,
  LOAD_LEARN_PAGE_FAILURE,
} from './Learn.constants';

export const loadLearnPage = () => ({
  type: LOAD_LEARN_PAGE,
  slotId: 'featurePageSlot',
});

export const loadLearnPageSuccess = (data: any) => ({
  type: LOAD_LEARN_PAGE_SUCCESS,
  data,
});

export const loadLearnPageFailure = () => ({
  type: LOAD_LEARN_PAGE_FAILURE,
});

export default [loadLearnPage];

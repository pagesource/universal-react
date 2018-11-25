/*
 *
 * ErrorPage actions
 *
 */
// @flow
import {
  LOAD_ERROR_PAGE,
  LOAD_ERROR_PAGE_SUCCESS,
  LOAD_ERROR_PAGE_FAILURE,
} from './ErrorPage.constants';

export const loadErrorPage = () => ({
  type: LOAD_ERROR_PAGE,
  slotId: 'errorPageSlot',
});

export const loadErrorPageSuccess = (data: any) => ({
  type: LOAD_ERROR_PAGE_SUCCESS,
  data,
});

export const loadErrorPageFailure = () => ({
  type: LOAD_ERROR_PAGE_FAILURE,
});

export default [loadErrorPage];

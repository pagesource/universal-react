/*
 *
 * FeaturesPage actions
 *
 */
// @flow
import {
  LOAD_FEATURES_PAGE,
  LOAD_FEATURES_PAGE_SUCCESS,
  LOAD_FEATURES_PAGE_FAILURE,
} from './Features.constants';

export const loadFeaturesPage = () => ({
  type: LOAD_FEATURES_PAGE,
  slotId: 'featurePageSlot',
});

export const loadFeaturesPageSuccess = (data: any) => ({
  type: LOAD_FEATURES_PAGE_SUCCESS,
  data,
});

export const loadFeaturesPageFailure = () => ({
  type: LOAD_FEATURES_PAGE_FAILURE,
});

export default [loadFeaturesPage];

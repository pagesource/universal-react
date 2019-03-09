// @flow
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from '../HomePage.constants';

export type LoadHomeFailureAction = {
  type: typeof LOAD_HOME_FAILURE,
  error: Error,
};

export type LoadSeoDataAction = { type: typeof LOAD_HOME_SEO };

export type LoadSeoDataSuccessAction = {
  type: typeof LOAD_HOME_SEO_SUCCESS,
  data: any,
};

export type LoadHomeEditorialDataAction = {
  type: typeof LOAD_HOME_EDITORIAL_DATA,
  slotId: string,
};

export type LoadHomeEditorialDataSuccessAction = {
  type: typeof LOAD_HOME_EDITORIAL_DATA_SUCCESS,
  data: any,
};

export type Props = {
  seoData: Object,
  editorialData: Object,
};

export type ObjectState = {
  seoData: Object,
};

export type HomePageActions =
  | LoadHomeFailureAction
  | LoadSeoDataAction
  | LoadSeoDataSuccessAction
  | LoadHomeEditorialDataAction
  | LoadHomeEditorialDataSuccessAction;

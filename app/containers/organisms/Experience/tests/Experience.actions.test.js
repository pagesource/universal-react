import {
  loadHomeFailure,
  loadHomeSeo,
  loadHomeSeoSuccess,
  loadHomePageEditorial,
  loadHomePageEditorialSuccess,
} from '../HomePage.actions';
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from '../HomePage.constants';

describe('HomePage Actions', () => {
  test('calls Failure', () => {
    const error = {};
    const expectedAction = {
      type: LOAD_HOME_FAILURE,
      error,
    };
    expect(loadHomeFailure(error)).toEqual(expectedAction);
  });

  test('calls LOAD_HOME_FAILURE Failure', () => {
    const error = {};
    const expectedAction = {
      type: LOAD_HOME_FAILURE,
      error,
    };
    expect(loadHomeFailure(error)).toEqual(expectedAction);
  });

  test('calls HomePageLayout', () => {
    const expectedAction = {
      type: LOAD_HOME_SEO,
    };
    expect(loadHomeSeo()).toEqual(expectedAction);
  });

  test('calls HomePageLayoutSuccess', () => {
    const data = {};
    const expectedAction = {
      type: LOAD_HOME_SEO_SUCCESS,
      data,
    };
    expect(loadHomeSeoSuccess(data)).toEqual(expectedAction);
  });

  test('calls HomePageLayout', () => {
    const slotId = 'homePageSlot';
    const expectedAction = {
      type: LOAD_HOME_EDITORIAL_DATA,
      slotId,
    };
    expect(loadHomePageEditorial()).toEqual(expectedAction);
  });

  test('calls HomePageLayoutSuccess', () => {
    const data = {};
    const expectedAction = {
      type: LOAD_HOME_EDITORIAL_DATA_SUCCESS,
      data,
    };
    expect(loadHomePageEditorialSuccess(data)).toEqual(expectedAction);
  });
});

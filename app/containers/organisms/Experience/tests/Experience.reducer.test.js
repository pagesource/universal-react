import { layout, getFailure, addLayoutData, addHomeEditorialData } from '../HomePage.reducer';
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from '../HomePage.constants';

const state = {};

describe('HomePage Reducer functions', () => {
  test('calls Failure', () => {
    const action = { type: LOAD_HOME_FAILURE, error: 'new Error' };
    const newState = getFailure(state, action.error);
    expect(newState.error).toEqual(action.error);
  });

  test('calls addLayoutData', () => {
    const action = { type: LOAD_HOME_SEO_SUCCESS, data: 'Some HTML' };
    const newState = addLayoutData(state, action.data);
    expect(newState.seoData).toEqual(action.data);
  });

  test('calls addHomeEditorialData', () => {
    const action = { type: LOAD_HOME_EDITORIAL_DATA_SUCCESS, data: { content: 'Some HTML' } };
    const newState = addHomeEditorialData(state, action.data);
    expect(newState.editorialData).toEqual({ content: 'Some HTML' });
  });
});

describe('HomePage Reducer', () => {
  test('dispatch Action LOAD_HOME_SEO_SUCCESS', () => {
    const action = { type: LOAD_HOME_SEO_SUCCESS, data: 'Some HTML' };
    const newState = layout(state, action);
    expect(newState).toMatchObject(state);
  });

  test('dispatch Action LOAD_HOME_EDITORIAL_DATA_SUCCESS', () => {
    const action = { type: LOAD_HOME_EDITORIAL_DATA_SUCCESS, data: 'Some HTML' };
    const newState = layout(state, action);
    expect(newState).toMatchObject(state);
  });

  test('dispatch Action FAILURE', () => {
    const action = { type: LOAD_HOME_FAILURE, error: 'Some Error' };
    const newState = layout(state, action);
    expect(newState).toMatchObject(state);
  });

  test('return default State', () => {
    const action = { type: 'DUMMY_ACTION' };
    expect(layout(state, action)).toEqual(state);
  });
});

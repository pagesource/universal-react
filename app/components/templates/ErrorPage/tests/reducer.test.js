import get from 'lodash/get';
import { layout, setErrorPageData } from '../ErrorPage.reducer';
import { LOAD_ERROR_PAGE_SUCCESS, LOAD_ERROR_PAGE_FAILURE } from '../ErrorPage.constants';

const state = {};

describe('ErrorPage Reducer functions', () => {
  test('set Data', () => {
    const action = { type: LOAD_ERROR_PAGE_FAILURE, data: 'Error' };
    const newState = setErrorPageData(state, action.data);
    expect(get(newState, 'errorPageData')).toEqual(action.data);
  });
});

describe('ErrorPage Reducer', () => {
  test('dispatch Action LOAD_ERROR_PAGE_SUCCESS', () => {
    const action = { type: LOAD_ERROR_PAGE_SUCCESS, data: { content: 'Error' } };
    const newState = layout(state, action);
    expect(newState).not.toMatchObject(state);
  });

  test('dispatch Action LOAD_ERROR_PAGE_SUCCESS', () => {
    const action = { type: LOAD_ERROR_PAGE_FAILURE, data: { content: 'Error' } };
    const newState = layout(state, action);
    expect(newState).not.toMatchObject(state);
  });

  test('dispatch Action DFAULT', () => {
    const action = { type: 'DFAULT', data: { content: 'Error' } };
    const newState = layout(undefined, action);
    expect(newState).toMatchObject(state);
  });
});

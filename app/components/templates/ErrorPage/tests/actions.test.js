import { loadErrorPage, loadErrorPageSuccess, loadErrorPageFailure } from '../ErrorPage.actions';
import {
  LOAD_ERROR_PAGE,
  LOAD_ERROR_PAGE_SUCCESS,
  LOAD_ERROR_PAGE_FAILURE,
} from '../ErrorPage.constants';

describe('ErrorPage actions', () => {
  test('Should Load Error Page', () => {
    const expected = {
      type: LOAD_ERROR_PAGE,
      slotId: 'errorPageSlot',
    };
    expect(loadErrorPage()).toEqual(expected);
  });

  test('Should Trigger Error Page Success', () => {
    const data = { content: 'Not Found' };
    const expected = {
      type: LOAD_ERROR_PAGE_SUCCESS,
      data,
    };
    expect(loadErrorPageSuccess(data)).toEqual(expected);
  });

  test('Should Trigger Error Page Failure', () => {
    const expected = {
      type: LOAD_ERROR_PAGE_FAILURE,
    };
    expect(loadErrorPageFailure()).toEqual(expected);
  });
});

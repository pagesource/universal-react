import { setTrackerConfig } from '../../../utils/analytics';
import initializeTrackerConfig from '../index';
import setDataLayer from '../setDataLayer';

jest.mock('../../../utils/analytics', () => ({
  setTrackerConfig: jest.fn(),
}));

describe('initializeTrackerConfig', () => {
  test('should execute initializeTrackerConfig', () => {
    initializeTrackerConfig();
    expect(setTrackerConfig).toHaveBeenCalled();
  });

  test('should not set dataLayer in non browser mode', () => {
    setDataLayer({ initialConfig: { a: 1 }, data: { b: 2 } });
    expect(window.dataLayer).not.toBeDefined();
  });

  test('should set dataLayer in browser mode', () => {
    process.browser = true;
    setDataLayer({ initialConfig: { a: 1 }, data: { b: 2 } });
    expect(window.dataLayer).toBeDefined();
    delete process.browser;
  });
});

import { DEVICE_TYPE, CONFIG_KEYS, CURRENT_ROUTE, IS_TABLET } from '../../constants';
import { MOBILE } from '../../../constants';
import globalReducer, { initState } from '../globalData';

describe('GlobalReducer', () => {
  test('should return initial state', () => {
    const initialState = globalReducer(undefined, {});
    expect(initialState).toEqual(initState);
  });

  test('should return success state and set in devicetype ', () => {
    const newState = globalReducer(initState, { type: DEVICE_TYPE, deviceType: MOBILE });
    expect(newState).toEqual(initState.set('deviceType', MOBILE));
  });

  test('should return success state and set if Device is Tablet ', () => {
    const newState = globalReducer(initState, { type: IS_TABLET, isTablet: true });
    expect(newState).toEqual(initState.set('isTablet', true));
  });

  test('should return success state and setRoute ', () => {
    const newState = globalReducer(initState, { type: CURRENT_ROUTE, pathname: '/cart' });
    expect(newState).toEqual(initState.set('route', '/cart'));
  });

  test('should return success state and setConfigKeys ', () => {
    const configKeys = { key: 'value' };
    const newState = globalReducer(initState, { type: CONFIG_KEYS, configKeys });
    expect(newState).toEqual(initState.set('configKeys', configKeys));
  });
});

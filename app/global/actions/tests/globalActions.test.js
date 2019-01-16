import { serverActions } from '..';
import { DEVICE_TYPE, CURRENT_ROUTE, IS_TABLET } from '../../constants';
import { MOBILE } from '../../../constants';

describe('ProductListing Actions', () => {
  test('should dispatch addDeviceType', () => {
    const deviceType = MOBILE;
    expect(serverActions.addDeviceType(deviceType)).toEqual({
      type: DEVICE_TYPE,
      deviceType,
    });
  });

  test('should dispatch addIsTablet', () => {
    const isTablet = true;
    expect(serverActions.addIsTablet(isTablet)).toEqual({ type: IS_TABLET, isTablet });
  });

  test('should dispatch setCurrentRoute', () => {
    const pathname = '/cart';
    expect(serverActions.setCurrentRoute(pathname)).toEqual({ type: CURRENT_ROUTE, pathname });
  });
});

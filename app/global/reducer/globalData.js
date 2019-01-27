// @flow
import get from 'lodash/get';
import set from 'lodash/set';

import {
  DEVICE_TYPE,
  REGION_TYPE,
  CONFIG_KEYS,
  CURRENT_ROUTE,
  IS_TABLET,
  PAGE_URL,
  PAGE_QUERY,
  CHECK_AUTH_SUCCESS,
  SET_USER_STATE,
  USER_STATE_LOGGED_IN,
  UPDATE_SESSION_EMAIL,
  PAGE_ORIGIN,
} from '../constants';
import type {
  DeviceTypeAction,
  GlobalActions,
  ActiveRegionAction,
  ConfigKeyAction,
  RouteAction,
  setIsTabletAction,
} from '../types';
import { setCookie } from '../../utils/utils';

export const initState = {
  deviceType: '',
  activeRegion: '',
};

const setDevice = (state: Object, { deviceType }): DeviceTypeAction =>
  set(state, 'deviceType', deviceType);

const setIsTablet = (state: Object, { isTablet }): setIsTabletAction =>
  set(state, 'isTablet', isTablet);

const setConfigKeys = (state: Object, { configKeys }): ConfigKeyAction =>
  set(state, 'configKeys', configKeys);

const setRegion = (state: Object, { activeRegion }): ActiveRegionAction =>
  set(state, 'activeRegion', activeRegion);

const setPageUrl = (state: Object, { pageUrl }): ActiveRegionAction =>
  set(state, 'pageUrl', pageUrl);

const setRoute = (state: Object, { pathname }): RouteAction => set(state, 'route', pathname);

const setPageQuery = (state: Object, { pageQuery }) => set(state, 'pageQuery', pageQuery);

const setAuthentication = (state, { sessionInfo }) => set(state, 'sessionInfo', sessionInfo);
const setSessionEmail = (state, { email }) => {
  const sessionInfo = get(state, 'sessionInfo');
  return set(state, 'sessionInfo', sessionInfo);
};

const setUserState = (state, { userState }) => {
  if (userState === USER_STATE_LOGGED_IN) setCookie('lastLogin', new Date());
  return set(state, 'userState', userState);
};

const setPageOrigin = (state, { origin }) => set(state, 'pageOrigin', origin);

export default (state: Object = initState, action: GlobalActions = '') => {
  switch (action.type) {
    case DEVICE_TYPE:
      return setDevice(state, (action: DeviceTypeAction));
    case IS_TABLET:
      return setIsTablet(state, action);
    case REGION_TYPE:
      return setRegion(state, action);
    case CONFIG_KEYS:
      return setConfigKeys(state, action);
    case CURRENT_ROUTE:
      return setRoute(state, action);
    case PAGE_URL:
      return setPageUrl(state, action);
    case PAGE_QUERY:
      return setPageQuery(state, action);
    case CHECK_AUTH_SUCCESS:
      return setAuthentication(state, action);
    case UPDATE_SESSION_EMAIL:
      return setSessionEmail(state, action);
    case SET_USER_STATE:
      return setUserState(state, action);
    case PAGE_ORIGIN:
      return setPageOrigin(state, action);
    default:
      return state;
  }
};

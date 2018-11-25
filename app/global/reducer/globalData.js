// @flow
import { fromJS } from 'immutable';
import type { Map } from 'immutable';

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

export const initState = fromJS({
  deviceType: '',
  activeRegion: '',
});

const setDevice = (state: Map, { deviceType }): DeviceTypeAction =>
  state.set('deviceType', deviceType);

const setIsTablet = (state: Map, { isTablet }): setIsTabletAction =>
  state.set('isTablet', isTablet);

const setConfigKeys = (state: Map, { configKeys }): ConfigKeyAction =>
  state.set('configKeys', configKeys);

const setRegion = (state: Map, { activeRegion }): ActiveRegionAction =>
  state.set('activeRegion', activeRegion);

const setPageUrl = (state: Map, { pageUrl }): ActiveRegionAction => state.set('pageUrl', pageUrl);

const setRoute = (state: Map, { pathname }): RouteAction => state.set('route', pathname);

const setPageQuery = (state: Map, { pageQuery }) => state.set('pageQuery', fromJS(pageQuery));

const setAuthentication = (state, { sessionInfo }) => state.set('sessionInfo', fromJS(sessionInfo));
const setSessionEmail = (state, email) => {
  const sessionInfo = fromJS({ ...state.get('sessionInfo').toJS(), email });
  return state.set('sessionInfo', sessionInfo);
};

const setUserState = (state, { userState }) => {
  if (userState === USER_STATE_LOGGED_IN) setCookie('lastLogin', new Date());
  return state.set('userState', userState);
};

const setPageOrigin = (state, { origin }) => state.set('pageOrigin', origin);

export default (state: Map = initState, action: GlobalActions = '') => {
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
      return setSessionEmail(state, action.email);
    case SET_USER_STATE:
      return setUserState(state, action);
    case PAGE_ORIGIN:
      return setPageOrigin(state, action);
    default:
      return state;
  }
};

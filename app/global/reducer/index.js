// @flow
import { combineReducers } from 'redux-immutable';
import globalData from './globalData';

export default combineReducers({
  globalData,
});

export const globalDataStructure = [['global', 'globalData', 'deviceType']];

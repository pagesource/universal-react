// @flow
import { combineReducers } from 'redux';
import globalData from './globalData';

export default combineReducers({
  globalData,
});

export const globalDataStructure = [['global', 'globalData', 'deviceType']];

// @flow
import type { CallbackData } from './types';

/**
 * Set Tracking Data to window data layer
 * @param {CallbackData} trackingOptions
 */
const setDataLayer = ({ initialConfigs, data, type }: CallbackData) => {
  // $FlowFixMe eslint-disable-line
  if (process.browser) {
    window.dataLayer = { ...initialConfigs, ...data, type };
  }
};

export default setDataLayer;

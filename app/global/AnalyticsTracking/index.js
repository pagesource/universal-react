// @flow
import { setTrackerConfig } from '../../utils/analytics';

import { CURRENT_ROUTE } from '../constants';
import { LOAD_HOME_EDITORIAL_DATA_SUCCESS } from '../../containers/templates/HomePage/HomePage.constants';
import trackingConfig from './trackerConfig';
import setDataLayer from './setDataLayer';

const initializeTrackerConfig = () =>
  setTrackerConfig({
    initialConfigs: trackingConfig(),
    actions: [CURRENT_ROUTE, LOAD_HOME_EDITORIAL_DATA_SUCCESS],
    callback: setDataLayer,
  });

export default initializeTrackerConfig;

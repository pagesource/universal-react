// @flow

import { DEFAULT_SITE_SECTION } from './constants';

const trackingConfig = () => ({
  // $FlowFixMe eslint-disable-line
  page_url: process.browser ? window.location.href : '',
  site_section: DEFAULT_SITE_SECTION,
});

export default trackingConfig;

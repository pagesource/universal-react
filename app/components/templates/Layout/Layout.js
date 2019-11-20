// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { Node } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import get from 'lodash/get';

import Theme from '../../../styles/theme';
import Header from '../../../containers/organisms/Header';
import Footer from '../../../containers/organisms/Footer';
import { DESKTOP } from '../../../constants';
import API from '../../../utils/fetch';

type Props = {
  children: Node,
  deviceType: string,
  hasRightGutter?: boolean,
};

const Layout = ({ children, deviceType, hasRightGutter }: Props): Node => {
  // `deviceType` is now accessible to all component styles using `props.theme.deviceType`
  Theme.deviceType = deviceType || DESKTOP;
  /**
   * isTabletCheckout Setting for theming at component level
   * for all checkout pages loading on tablet device.
   */
  Theme.hasRightGutter = hasRightGutter;
  API.setDeviceType(deviceType);

  return (
    <ThemeProvider theme={Theme}>
      <main>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000" />
        </Head>
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  hasRightGutter: false,
};

/* istanbul ignore next */
const mapDispatchToProps = () => ({});

const mapStateToProps /* istanbul ignore next */ = (state: Object): { deviceType: string } => ({
  deviceType: get(state, ['global', 'globalData', 'deviceType', '']),
  isNavigationDrawerOpen: get(state, ['global', 'header', 'isNavigationDrawerOpen', '']),
  topBanner: get(state, ['global', 'header', 'topBanner', '']),
  isTablet: get(state, ['global', 'globalData', 'isTablet', '']),
  topBannerModalContent: get(state, ['global', 'header', 'topBannerModalContent', '']),
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
export { Layout };

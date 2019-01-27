// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { Node } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import get from 'lodash/get';

import Theme from '../../../styles/theme';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import { MOBILE } from '../../../constants';
import API from '../../../utils/fetch';

type Props = {
  children: Node,
  deviceType: string,
  hasRightGutter?: boolean,
};

const Layout = ({ children, deviceType, hasRightGutter }: Props): Node => {
  // `deviceType` is now accessible to all component styles using `props.theme.deviceType`
  Theme.deviceType = deviceType;
  /**
   * isTabletCheckout Setting for theming at component level
   * for all checkout pages loading on tablet device.
   */
  Theme.hasRightGutter = hasRightGutter;
  API.setDeviceType(deviceType);

  const isMobile = deviceType === MOBILE;
  /**
   * check whether on checkout pages to have right Space/gutter in the window,
   * for chat Icon overlaping issue in Ipad.
   */
  const width = hasRightGutter ? 1100 : 1000;

  return (
    <ThemeProvider theme={Theme}>
      <main>
        <Head>
          {isMobile ? (
            <meta
              name="viewport"
              content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no"
            />
          ) : (
            <meta name="viewport" content={`width=${width}`} />
          )}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
export { Layout };

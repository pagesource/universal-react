/* eslint-disable complexity */
import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import get from 'lodash/get';
import withRedux from 'next-redux-wrapper';
import globalActions, { serverActions, pageActions } from '../global/actions';
import { DESKTOP, MOBILE, PHONE, TABLET } from '../constants';
import { parseQueryParams } from '../utils/utils';
import monitorSagas from '../lib/dynamicStore/monitorSagas';
import storeRef from '../lib/dynamicStore/store';

const headerExclusionList = [
  'host',
  'accept',
  'content-length',
  'content-type',
  'connection',
  'cookie',
];

export default withRedux(storeRef.setStore, { debug: true })(
  class MyApp extends App {
    static cleanupRequestHeaders = requestHeaders => {
      if (!requestHeaders) {
        return null;
      }
      const requestHeadersCopy = { ...requestHeaders };
      headerExclusionList.forEach(header => {
        delete requestHeadersCopy[header];
      });

      // Alternative header for user agent
      requestHeadersCopy['x-ua-browser'] = requestHeaders['user-agent'];
      return requestHeadersCopy;
    };

    static async getInitialProps({ Component, ctx }) {
      const { isServer, req = {}, query, pathname, asPath } = ctx;
      // eslint-disable-next-line extra-rules/no-commented-out-code
      // injectSagaAndReducer(key, store, saga, reducer); // this will be here
      const store = storeRef.getStore();
      store.dispatch(serverActions.setCurrentRoute(pathname));
      let requestDetails;
      let clientParams = {};
      const { device = {} } = req;
      const { headers = {} } = req;
      const { host = '' } = headers;
      const { cookies = {} } = req;
      const { perfLogger = {} } = req;

      if (isServer) {
        const deviceType = device.type === PHONE ? MOBILE : DESKTOP;
        const isTablet = device.type === TABLET;
        store.dispatch(serverActions.addIsTablet(isTablet)); // FIXME: Seggregate naming convention for app level actions
        store.dispatch(serverActions.addDeviceType(deviceType));
        store.dispatch(serverActions.setPageUrl(req.url));
        store.dispatch(serverActions.setPageQuery({ ...req.query, ...query }));
        store.dispatch(serverActions.setPageOrigin(`${req.protocol}://${host}`));

        requestDetails = {
          deviceType,
          cookies: cookies.cookieList,
          logger: perfLogger,
          whitelistedHeaders: MyApp.cleanupRequestHeaders(headers),
        };
      } else {
        clientParams = parseQueryParams(asPath);
        store.dispatch(serverActions.setPageQuery(clientParams));
        requestDetails = {
          deviceType: get(store.getState(), ['global', 'globalData', 'deviceType']),
        };
      }

      // if (preExecuteGetInitialProps && WrappedComponent.getInitialProps) { //FIXME: To be revisited later
      //   await WrappedComponent.getInitialProps(...params);
      // }

      if (
        isServer &&
        globalActions instanceof Array &&
        typeof Component.dispatchActions === 'function'
      ) {
        Component.dispatchActions({
          actions: globalActions,
          store,
          needQuery: false, // FIXME: useQuery was here
          query,
          requestDetails,
        });
      }

      // const combinedPageActions =
      //   initialActions instanceof Array ? [...pageActions, ...initialActions] : [...pageActions]; // Move initial actions back
      if (typeof Component.dispatchActions === 'function') {
        // FIXME: This is a custom function
        Component.dispatchActions({
          actions: pageActions,
          store,
          needQuery: false,
          query: { ...query, ...clientParams },
          requestDetails,
        });
      }

      // Wait till all sagas are done
      await monitorSagas(store, isServer);

      // eslint-disable-next-line extra-rules/no-commented-out-code
      // Component.validatePageData(criticalState, res, store, isServer); // FIXME: This has to move back

      // if (!preExecuteGetInitialProps && WrappedComponent.getInitialProps) {
      //   await WrappedComponent.getInitialProps(...params);
      // }
      return {
        pageProps: {
          ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        },
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);

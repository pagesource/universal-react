// @flow
import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
import { ServerStyleSheet } from 'styled-components';

import styles from '../styles'; // eslint-disable-line no-unused-vars
import catchErrors from '../utils/errorBoundary';

import cssIncludes from '../styles/cssIncludes';
import { MOBILE, DESKTOP } from '../constants';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const { device = {} } = ctx.req || {};
    const deviceType = device.type === DESKTOP ? DESKTOP : MOBILE;
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        deviceType,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const Content = catchErrors(Main);
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <link rel="manifest" href="/static/manifest.json" />
          {cssIncludes.map(css => (
            <Fragment key={`fragment-${css.id}`}>
              <link type="text/css" rel="stylesheet" href={css.src} />
            </Fragment>
          ))}
          {styleTags}
        </Head>
        <body className="app">
          <noscript>Javascript is required for this page</noscript>
          <Content />
          <NextScript />
        </body>
      </html>
    );
  }
}

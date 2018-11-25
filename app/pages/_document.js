// @flow
import { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import styles from '../styles'; // eslint-disable-line no-unused-vars
import catchErrors from '../utils/errorBoundary';

import cssIncludes from '../styles/cssIncludes';
import { PHONE, MOBILE, DESKTOP } from '../constants';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, req }: any) {
    const deviceType = req.device.type === PHONE ? MOBILE : DESKTOP;
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, deviceType };
  }

  render() {
    const Content = catchErrors(Main);
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          {cssIncludes.map(css => (
            <Fragment key={`fragment-${css.id}`}>
              <link type="text/css" rel="stylesheet" href={css.src} />
            </Fragment>
          ))}
          {styleTags}
        </Head>
        <body className="app">
          <Content />
          <NextScript />
        </body>
      </html>
    );
  }
}

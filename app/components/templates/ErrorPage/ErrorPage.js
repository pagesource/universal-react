// @flow
import React, { Component } from 'react';
import get from 'lodash/get';

import Layout from '../Layout';
import enhance from '../../../lib/dynamicStore';
import initialActions from './ErrorPage.actions';
import HeadTag from '../../atoms/HeadTag';
import saga from './ErrorPage.saga';
import reducer from './ErrorPage.reducer';

class ErrorPage extends Component<any> {
  static getInitialProps({ res }: any) {
    if (res && res.redirect) {
      res.status(404);
    }
    return {};
  }

  render() {
    const { errorData } = this.props;
    const errorMessage = get(errorData, 'message');
    return (
      <Layout title="error" className="row" id="content-wrapper" tabindex="-1">
        <HeadTag description="error page" title="error page" />
        <section id="notFoundContent" style={{ width: '100%' }}>
          {errorMessage}
        </section>
      </Layout>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  state,
  errorData: get(state, ['errorPage', 'errorPageData']),
});

const mapDispatchToProps = () => ({});

export default enhance(ErrorPage, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: 'errorPage',
  initialActions,
});

export { ErrorPage as ErrorPageDisconnected };

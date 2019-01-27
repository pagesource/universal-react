// @flow
import { Component } from 'react';
import Layout from '../Layout';
import enhance from '../../../lib/dynamicStore';
import initialActions from './ErrorPage.actions';
import HeadTag from '../../atoms/HeadTag';
import saga from './ErrorPage.saga';
import reducer from './ErrorPage.reducer';
import get from 'lodash/get';

class ErrorPage extends Component<any> {
  static getInitialProps({ res }: any) {
    if (res && res.redirect) {
      res.status(404);
    }
    return {};
  }

  render() {
    const { errorData, state } = this.props;
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

const mapDispatchToProps = dispatch => ({});

export default enhance(ErrorPage, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: 'errorPage',
  initialActions,
});

export { ErrorPage as ErrorPageDisconnected };

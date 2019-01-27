// @flow
import { PureComponent } from 'react';
import get from 'lodash/get';
import Layout from '../Layout';
import enhance from '../../../lib/dynamicStore';
import initialActions from './HomePage.actions';
import HeadTag from '../../atoms/HeadTag';
import saga from './HomePage.saga';
import reducer from './HomePage.reducer';
import Highlight from '../../molecules/Highlights';
import Testimonials from '../../molecules/Testimonials';
import TopBanner from '../../molecules/TopBanner';

type Props = {};

class HomePage extends PureComponent<Props> {
  static defaultProps = {
    seoData: {
      homePageMetaDesc: '',
      homePagePageTitle: '',
      seoMetaDesc: undefined,
    },
    editorialData: {},
  };

  render() {
    const { editorialData } = this.props;

    const { title, banner } = editorialData;

    return (
      <Layout title="home" className="row" id="content-wrapper">
        <HeadTag description="Home Page Description" title="Home page" />
        <TopBanner title={title} banner={banner} />
        <Highlight />
        <Testimonials />
      </Layout>
    );
  }
}
/* istanbul ignore next */
const mapStateToProps = state => ({
  editorialData: get(state, ['homePage', 'layout', 'editorialData']),
});

const mapDispatchToProps = (dispatch: Object) => ({});

export default enhance(HomePage, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: 'homePage',
  initialActions,
  criticalState: [['homePage', 'layout', 'editorialData']],
});

export { HomePage as HomePageDisconnected };

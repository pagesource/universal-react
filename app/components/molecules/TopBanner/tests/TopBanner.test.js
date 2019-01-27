import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import TopBanner from '../index';

describe('<TopBanner />', () => {
  let TopBannerComponent = '';
  beforeEach(() => {
    TopBannerComponent = shallow(<TopBanner>Test</TopBanner>);
  });

  test('should render correctly', () => {
    expect(TopBannerComponent).toMatchSnapshot();
  });
});

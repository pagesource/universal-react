import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TopBanner } from '../TopBanner';

describe('<TopBanner />', () => {
  let TopBannerComponent = '';
  beforeEach(() => {
    TopBannerComponent = shallow(<TopBanner title="Banner Title" subTitle="Banner subtitle" />);
  });

  test('should render correctly', () => {
    expect(TopBannerComponent).toMatchSnapshot();
  });

  test('should render correctly without subtitle', () => {
    TopBannerComponent.setProps({ subTitle: undefined });
    expect(TopBannerComponent).toMatchSnapshot();
  });
});

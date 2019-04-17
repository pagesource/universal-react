import { shallow } from 'enzyme';
import 'jest-styled-components';
import { Layout } from '../Layout';
import LayoutElement from '../Layout.style';
// import { DESKTOP, MOBILE } from '../../../../constants';

const props = {
  children: <div>HELLO</div>,
  deviceType: 'DESKTOP',
  isNavigationDrawerOpen: true,
  topBanner: 'TOPBANNER',
  hasRightGutter: 1100,
};

xdescribe('Layout Component', () => {
  let layout = '';

  beforeEach(() => {
    layout = shallow(<Layout {...props} />);
  });

  test('should render correctly', () => {
    expect(layout).toMatchSnapshot();
  });

  test('should render when deviceType is Mobile', () => {
    props.deviceType = 'MOBILE';
    props.hasRightGutter = undefined;
    layout = shallow(<Layout {...props} />);
    expect(layout).toMatchSnapshot();
  });

  test('should render the styled component appropriately', () => {
    const styledLayout = shallow(<LayoutElement {...props} />);
    expect(styledLayout).toMatchSnapshot();
  });
});

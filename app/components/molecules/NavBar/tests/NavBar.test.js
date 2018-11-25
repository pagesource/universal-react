
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import NavBar from '../index';

describe('<NavBar />', () => {
  let NavBarComponent = '';
  beforeEach(() => {
    NavBarComponent = shallow(<NavBar>Test</NavBar>);
  });

  test('should render correctly', () => {
    expect(NavBarComponent).toMatchSnapshot();
  });
});

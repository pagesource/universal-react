import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavBar } from '../NavBar';

const items = [
  { href: '/1', label: 'Link 1' },
  { href: '/2', label: 'Link 2' },
];

describe('<NavBar />', () => {
  test('should render correctly', () => {
    const NavBarComponent = shallow(<NavBar>Test</NavBar>);
    expect(NavBarComponent).toMatchSnapshot();
  });

  test('should render correctly', () => {
    const NavBarComponent = shallow(<NavBar items={items} />);
    expect(NavBarComponent).toMatchSnapshot();
    expect(NavBarComponent.find('li').length).toEqual(2);
  });
});

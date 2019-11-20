import renderer from 'react-test-renderer';
import 'jest-styled-components';
import NavBar from '../index';

const items = [
  { href: '/1', label: 'Link 1' },
  { href: '/2', label: 'Link 2' },
];

describe('ProgressCircle Component', () => {
  test('should match snapshot ', () => {
    const NavBarComponent = renderer.create(<NavBar items={items} />);
    expect(NavBarComponent).toMatchSnapshot();
  });

  test('should match snapshot with vertical view ', () => {
    const NavBarComponent = renderer.create(<NavBar items={items} vertical />);
    expect(NavBarComponent).toMatchSnapshot();
  });
});

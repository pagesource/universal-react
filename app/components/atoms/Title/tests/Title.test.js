import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Title from '..';

const props = {
  children: 'Sample',
  className: '',
};
describe('Anchor Component', () => {
  let title;

  test('should render correctly and match snapshot', () => {
    title = shallow(<Title {...props} />);
    expect(title).toMatchSnapshot();
  });

  test('should render with styles correctly and match snapshot', () => {
    title = renderer.create(<Title {...props} />).toJSON();
    expect(title).toMatchSnapshot();
  });
});

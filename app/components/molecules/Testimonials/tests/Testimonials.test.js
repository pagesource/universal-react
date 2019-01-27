import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Testimonials from '../index';

describe('<Testimonials />', () => {
  let TestimonialsComponent = '';
  beforeEach(() => {
    TestimonialsComponent = shallow(<Testimonials>Test</Testimonials>);
  });

  test('should render correctly', () => {
    expect(TestimonialsComponent).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('Footer component', () => {
  test('should render correctly', () => {
    const FooterComponent = shallow(<Footer />);
    expect(FooterComponent).toMatchSnapshot();
  });
});

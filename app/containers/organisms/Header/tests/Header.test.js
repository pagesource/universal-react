import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

const editorialData = {
  title: 'Test Title',
  banner: 'Test Banner',
};

describe('Header component', () => {
  test('should render correctly', () => {
    const HeaderComponent = shallow(<Header editorialData={editorialData} />);
    expect(HeaderComponent).toMatchSnapshot();
  });
});

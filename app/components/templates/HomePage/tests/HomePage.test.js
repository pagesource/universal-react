import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';

const editorialData = {
  title: 'Test Title',
  banner: 'Test Banner',
};

describe('HomePage component', () => {
  test('should render correctly', () => {
    const HomePageComponent = shallow(<HomePage editorialData={editorialData} />);
    expect(HomePageComponent).toMatchSnapshot();
  });
});

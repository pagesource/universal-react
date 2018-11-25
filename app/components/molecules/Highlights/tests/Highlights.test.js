
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Highlights from '../index';

describe('<Highlights />', () => {
  let HighlightsComponent = '';
  beforeEach(() => {
    HighlightsComponent = shallow(<Highlights>Test</Highlights>);
  });

  test('should render correctly', () => {
    expect(HighlightsComponent).toMatchSnapshot();
  });
});

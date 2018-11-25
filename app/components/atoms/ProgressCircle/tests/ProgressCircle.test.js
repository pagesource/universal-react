import 'jest-styled-components';
import { shallow } from 'enzyme';
import { ProgressRingVanilla } from '../ProgressCircle';

describe('ProgressCircle Component', () => {
  let component = '';
  beforeEach(() => {
    component = shallow(<ProgressRingVanilla />);
  });

  test('should match snapshot ', () => {
    expect(component).toMatchSnapshot();
  });
});

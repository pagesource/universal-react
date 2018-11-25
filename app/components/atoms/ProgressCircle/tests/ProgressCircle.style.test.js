import 'jest-styled-components';
import { shallow } from 'enzyme';
import Theme from '../../../../styles/theme';
import { DESKTOP } from '../../../../constants';
import ProgressRing from '../ProgressCircle';

const theme = { ...Theme };

describe('ProgressCircle Component', () => {
  let component = '';
  beforeEach(() => {
    theme.deviceType = DESKTOP;
    component = shallow(<ProgressRing theme={theme} />);
  });

  test('should match snapshot ', () => {
    expect(component).toMatchSnapshot();
  });
});

import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Spinner from '..';
import Theme from '../../../../styles/theme';
import { DESKTOP } from '../../../../constants';

describe('Spinner', () => {
  const theme = { ...Theme, deviceType: DESKTOP };
  let spinner = '';
  beforeEach(() => {
    spinner = renderer.create(<Spinner theme={theme} />).toJSON();
  });

  test('should render correctly', () => {
    expect(spinner).toMatchSnapshot();
  });
});

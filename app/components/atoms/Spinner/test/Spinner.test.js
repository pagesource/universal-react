import { shallow } from 'enzyme';
import { SpinnerVanilla } from '../Spinner';

describe('Spinner Component', () => {
  let spinner = '';
  beforeEach(() => {
    spinner = shallow(<SpinnerVanilla />);
  });

  test('should render correctly', () => {
    expect(spinner).toMatchSnapshot();
  });

  test('overlayEnabled is necessary to render child', () => {
    spinner = shallow(<SpinnerVanilla overlayEnabled spinner />);
    expect(spinner).toMatchSnapshot();
  });

  test('should render renderDotSpinner', () => {
    // render child component(based on condition)
    spinner = shallow(<SpinnerVanilla overlayEnabled />);
    expect(spinner).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TextAreaComponent } from '../TextArea';
import TextAreaStyle from '../';

import Theme from '../../../../styles/theme';
import { DESKTOP } from '../../../../constants';

const theme = {
  ...Theme,
  deviceType: DESKTOP,
};

const props = {
  className: '',
  id: '1',
  labelContent: '',
  iconClass: '',
  isError: false,
  errorMessage: 'error',
  hideLabel: false,
  inheritedStyles: '',
};

describe('PaymentMethod component', () => {
  let textAreaComponent = '';
  test('should render correctly', () => {
    textAreaComponent = shallow(<TextAreaComponent {...props} />);
    expect(textAreaComponent).toMatchSnapshot();
  });
});

describe('PaymentMethodStyle component', () => {
  let textAreaComponent = '';
  test('should render correctly', () => {
    textAreaComponent = shallow(<TextAreaStyle {...props} {...theme} />);
    expect(textAreaComponent).toMatchSnapshot();
  });
});

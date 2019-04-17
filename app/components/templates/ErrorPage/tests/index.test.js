import { shallow } from 'enzyme';
import { ErrorPageDisconnected as ErrorPage } from '../ErrorPage';

const props = {
  errorData: {
    message: 'Test Message',
  },
};

describe('ErrorPage Component', () => {
  test('should render correctly', () => {
    const errorPage = shallow(<ErrorPage {...props} />);
    expect(errorPage).toMatchSnapshot();
  });
});

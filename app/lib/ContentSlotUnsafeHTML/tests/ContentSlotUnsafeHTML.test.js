import { shallow } from 'enzyme';
import ContentSlotUnsafeHTML from '../';

/* eslint-disable import/prefer-default-export */
export const props = {
  content: '<div>HTML</div>',
  hasScript: true,
};

describe('ContentSlotUnsafeHTML Component', () => {
  let contentSlot = '';

  Object.defineProperty(document, 'createRange', {
    value() {
      return {
        setStart() {},
        createContextualFragment() {},
      };
    },
  });
  Object.defineProperty(document.body, 'appendChild', {
    value() {},
  });

  beforeEach(() => {
    contentSlot = shallow(<ContentSlotUnsafeHTML {...props} />);
  });

  test('should render correctly', () => {
    expect(contentSlot).toMatchSnapshot();
  });

  test('should render correclty without Wrapper', () => {
    props.wrapper = '';
    const contentSlotMount = shallow(<ContentSlotUnsafeHTML {...props} />);
    expect(contentSlotMount).toMatchSnapshot();
  });

  test('should render correclty with Wrapper', () => {
    props.wrapper = 'div';
    const contentSlotMount = shallow(<ContentSlotUnsafeHTML {...props} />);
    expect(contentSlotMount).toMatchSnapshot();
  });
});

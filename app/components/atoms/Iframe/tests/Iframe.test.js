import { shallow } from 'enzyme';
import { IframeComponent } from '../Iframe';

describe('Iframe', () => {
  let iframe = '';

  test('should render correctly', () => {
    expect(iframe).toMatchSnapshot();
  });

  test('should render additional props', () => {
    iframe = shallow(
      <IframeComponent
        iframeTitle="Hello iframe"
        sourceUrl="http://www.google.com"
        name="testIframe"
      />
    );
    expect(iframe.find({ name: 'testIframe' })).toHaveLength(1);
  });

  test('should take ContentHeight', () => {
    iframe = shallow(
      <IframeComponent
        iframeTitle="Hello iframe"
        sourceUrl="http://www.google.com"
        name="testIframe"
        takeContentHeight="234px"
      />
    );
    expect(iframe).toMatchSnapshot();
  });

  test('should call onLoad Method', () => {
    iframe = shallow(
      <IframeComponent
        iframeTitle="Hello iframe"
        sourceUrl="http://www.google.com"
        name="testIframe"
        takeContentHeight="234px"
        onLoad={() => {}}
      />
    );
    iframe.instance().iframe = { contentWindow: { document: { body: { scrollHeight: 20 } } } };
    iframe.find('iframe').simulate('load');
    expect(iframe).toMatchSnapshot();
  });
});

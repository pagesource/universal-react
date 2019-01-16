import { shallow } from 'enzyme';
import HeadTag from '..';
import { MetaTag } from '../HeadTag';

const sampleSiteData = {
  title: 'title',
  author: 'author',
  description: 'description',
  image: 'image',
  url: 'url',
  type: 'type',
  siteName: 'siteName',
  card: 'sample_description',
};

describe('HeadTag Component', () => {
  let head;
  const metaData = {
    content: 'content',
    prefix: 'prefix',
    meta: {
      key: 'meta key',
    },
  };

  test('should render correctly and match snapshot', () => {
    head = shallow(<HeadTag {...sampleSiteData} />);
    expect(head).toMatchSnapshot();
  });

  test('should render correctly when no props passed', () => {
    head = shallow(<HeadTag />);
    expect(head).toMatchSnapshot();
  });

  test('should render tags for only the props that were passed', () => {
    head = shallow(<HeadTag title="mytitle" />);
    expect(head.contains(<title>mytitle</title>)).toEqual(true);
    expect(head.find('meta')).toHaveLength(0);
  });
  test('should render meta tags properly', () => {
    const metaTags = shallow(<MetaTag {...metaData} />);
    expect(metaTags).toMatchSnapshot();
  });
});

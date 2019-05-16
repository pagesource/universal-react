import trackingOptions from '../trackerConfig';

describe('trackingOptions', () => {
  test('tracker config when not in browser', () => {
    const option = trackingOptions();
    expect(option).toEqual({
      page_url: '',
      site_section: 'HOME PAGE - BANNER',
    });
  });

  test('tracker config when in browser', () => {
    process.browser = true;
    const option = trackingOptions();
    expect(option).toEqual({
      page_url: 'http://localhost/',
      site_section: 'HOME PAGE - BANNER',
    });
    delete process.browser;
  });
});

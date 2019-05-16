import { trackingMiddleware } from '../trackingMiddleware';

jest.mock('../helpers/trackerEvents', () => ({
  trackActions: jest.fn(),
}));

describe('Tracker Middleware', () => {
  const actionsFromApplication = [
    { type: 'EXAMPLE_PAGE_ACTION', data: { test: 'test' } },
    { type: 'EXAMPLE_EVENT_ACTION', data: { action: 'test', test: 'test' } },
    { type: 'EXAMPLE_ACTION', data: { test: 'test' } },
  ];

  test('trackingMiddleware', () => {
    const next = jest.fn();
    const tracker = {
      instance: {},
      actions: ['EXAMPLE_PAGE_ACTION'],
    };

    actionsFromApplication.forEach(action => {
      trackingMiddleware(tracker)()(next)(action);
    });

    expect(next).toHaveBeenCalledTimes(3);
  });
});

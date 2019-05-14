// @flow
import type { TrackingOptions } from '../types';
import { getTracker } from './initTracker';

const { instance } = getTracker();

export const trackActions = ({ type, data }: TrackingOptions) => {
  if (!type) {
    throw new ReferenceError('Define type for tracker.');
  }

  return instance.trackEvent({
    type,
    data,
  });
};

export default { trackActions };

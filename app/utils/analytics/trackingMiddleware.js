// @flow
import type { TrackerObject, ActionType } from './types';
import { trackActions } from './helpers/trackerEvents';

/**
 * Simple redux middleware to use redux actions as input of tracking!
 * this will call the track function from the provided instance of tracker on every action
 * and use the action type as the event type and the action payload as the event data
 * @param {Object} tracker
 */
export const trackingMiddleware = (tracker: TrackerObject) => () => (next: any) => (
  action: ActionType
) => {
  if (tracker && tracker.instance) {
    const { actions } = tracker;
    const { type, data } = action;
    if (actions && actions.length > 0 && actions.includes(type)) {
      trackActions({ type, data });
    }
  }
  next(action);
};

export default trackingMiddleware;

// @flow
export type TrackingOptions = {
  type: string,
  data: any,
};

export type AnalyticsEventType = string | '*';

export type AnalyticsData = {};

export type AnalyticsEvent = {
  type: string,
  data?: AnalyticsData,
  action?: string,
};

export type AnalyticsEventHistory = Array<AnalyticsEvent>;

export type AnalyticsListenersCallback = (
  eventData: AnalyticsEvent,
  trackingHistory: AnalyticsEventHistory
) => void;

export type AnalyticsListeners = Array<AnalyticsListenersCallback>;

export type Tracker = {
  on: (event: AnalyticsEventType, callback: AnalyticsListenersCallback) => void,
  trackEvent: (event: AnalyticsEvent) => void,
  getHistory: () => AnalyticsEventHistory,
};

export type TrackerObject = {
  initialConfigs: Object,
  instance: Tracker,
  actions: Array<string>,
  callback: (args: Object) => void,
};

export type ActionType = {
  type: string,
  data?: any,
};

export type CallbackData = {
  initialConfigs: any,
  data: any,
  type: string,
};

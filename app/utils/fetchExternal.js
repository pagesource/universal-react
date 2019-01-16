// @flow
import fetch from 'isomorphic-unfetch';
import es6promise from 'es6-promise';

import { HEARTBEAT_SESSION_NAME } from '../constants';

es6promise.polyfill();

class ServiceUtils {
  sessions: Object;

  constructor(sessions: Object = {}) {
    this.sessions = sessions;
  }

  setSessionID(sessionName: string, sessionId: string | number) {
    this.sessions[sessionName] = sessionId;
  }

  // corss check from reviewer
  fetch = (url: string, props: Object) => {
    let fetchUrl: string;
    let headers = {};
    if (process.browser) {
      // TODO: Needs review
      // fetchUrl = url.replace(CLIENT_URL_PREFIX, '');
      fetchUrl = url;
    } else {
      fetchUrl = url;
      headers = {
        'content-type': 'application/json',
      };
      headers[HEARTBEAT_SESSION_NAME] = this.sessions[HEARTBEAT_SESSION_NAME];
    }
    return fetch(fetchUrl, {
      headers,
      ...props,
    });
  };
}

export default new ServiceUtils();

// @flow
import type { Node } from 'react';
import { Component } from 'react';
import logger from './logger';

export default function(WrappedComponent: any) {
  return class errorBoundaryComponent extends Component<any> {
    /* eslint-disable class-methods-use-this */
    // cors check from reviewer
    componentDidCatch(error: any, info: Object) {
      logger.error('error', JSON.stringify(`App failed to load with errors: ${error}`));
      logger.info('info', JSON.stringify(info));
    }
    /* eslint-enable class-methods-use-this */

    render(): Node {
      return <WrappedComponent {...this.props} />;
    }
  };
}

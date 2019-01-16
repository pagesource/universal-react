/**
 *
 * TopBanner
 *
 *  */

// @flow
import { PureComponent } from 'react';
import styles from './TopBanner.style';
import withStyles from '../../../lib/withStyles';
import type { Props } from './types';

class TopBanner extends PureComponent<Props> {
  static defaultProps = {};

  render() {
    const { className } = this.props;
    return (
      <section className={className} id="banner">
        <div className="inner">
          <h1>{this.props.title || 'Not available'}</h1>
          <p>{this.props.banner}</p>
        </div>
      </section>
    );
  }
}
export default withStyles(TopBanner, styles);
export { TopBanner };

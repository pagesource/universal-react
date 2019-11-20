/**
 *
 * TopBanner
 *
 *  */

// @flow
import React, { PureComponent } from 'react';
import styles from './TopBanner.style';
import withStyles from '../../../lib/withStyles';
import type { Props } from './types';

class TopBanner extends PureComponent<Props> {
  render() {
    const { className, title, subTitle } = this.props;
    return (
      <section className={className} id="banner">
        <div className="inner">
          <h1>{title}</h1>
          {subTitle && <p>{subTitle}</p>}
        </div>
      </section>
    );
  }
}

TopBanner.defaultProps = {};
export default withStyles(TopBanner, styles);
export { TopBanner };

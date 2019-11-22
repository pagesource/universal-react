/**
 *
 * ArticleWrap
 *
 *  */

// @flow
import React, { PureComponent } from 'react';
import styles from './ArticleWrap.style';
import withStyles from '../../../lib/withStyles';
import type { Props } from './types';

class ArticleWrap extends PureComponent<Props> {
  render() {
    const { title, children, isLeft, subtitle } = this.props;
    let { className } = this.props;
    let containerClass = 'container-wrap';
    if (isLeft) {
      className = className ? `${className.toString()} text-left` : 'text-left';
      containerClass = containerClass ? `${containerClass} m-t-30` : 'm-t-30';
    }

    return (
      <article className={className}>
        <div className="inner">
          <h2>{title}</h2>
          {subtitle && <div className="sub-heading">{subtitle}</div>}
          <div className={containerClass}>{children}</div>
        </div>
      </article>
    );
  }
}
export default withStyles(ArticleWrap, styles);
export { ArticleWrap };

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
  typingSpeed = 80;

  deletingSpeed = 30;

  deleteDelay = 2000;

  PART_INDEX = 0;

  PART = 0;

  INTERVAL_VAL = undefined;

  ELEMENT: HTMLElement;

  points: Array<string> = [];

  componentDidMount() {
    const { tickerPoints } = this.props;
    this.points = tickerPoints;
    this.PART = 0;
    this.PART_INDEX = 0;
    if (tickerPoints) {
      this.ELEMENT = document.querySelector(`#ticker`);
      this.INTERVAL_VAL = setInterval(() => {
        this.type();
      }, this.typingSpeed);
    }
  }

  type = () => {
    // Get substring with 1 characater added
    const text = this.points[this.PART].substring(0, this.PART_INDEX + 1);
    this.ELEMENT.innerHTML = text;
    this.PART_INDEX = this.PART_INDEX + 1;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === this.points[this.PART]) {
      clearInterval(this.INTERVAL_VAL);
      setTimeout(() => {
        this.INTERVAL_VAL = setInterval(() => {
          this.delete();
        }, this.deletingSpeed);
      }, this.deleteDelay);
    }
  };

  delete = () => {
    // Get substring with 1 characater deleted
    const text = this.points[this.PART].substring(0, this.PART_INDEX - 1);
    this.ELEMENT.innerHTML = text;
    this.PART_INDEX = this.PART_INDEX - 1;
    if (text === '') {
      clearInterval(this.INTERVAL_VAL);
      const pointLength = this.points.length - 1;
      if (this.PART === pointLength) {
        this.PART = 0;
      } else {
        this.PART = this.PART + 1;
      }

      this.PART_INDEX = 0;
      setTimeout(() => {
        this.INTERVAL_VAL = setInterval(() => {
          this.type();
        }, this.typingSpeed);
      }, 500);
    }
  };

  render() {
    const { className, title, subTitle, tickerPoints, subHeading } = this.props;
    return (
      <section className={className} id="banner">
        <div className="inner">
          <h1>{title}</h1>
          {subHeading && <div className="sub-heading">{subHeading}</div>}
          {subTitle && <p>{subTitle}</p>}
          {tickerPoints && <div id="ticker"> </div>}
        </div>
      </section>
    );
  }
}

TopBanner.defaultProps = {};
export default withStyles(TopBanner, styles);
export { TopBanner };

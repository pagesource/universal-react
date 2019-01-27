/**
 * Created by dcha17 on 1/5/2018.
 */

// @flow
import React from 'react';
import type { Node } from 'react';

import styles from './Spinner.style';
import withStyles from '../../../lib/withStyles';

type Props = {
  others?: Element | Node | Array<Node>,
  overlayEnabled?: boolean,
  spinner?: boolean,
  spinnerClassName?: string,
  className: string,
};

const Spinner = (props: Props): Node => {
  const renderDefaultSpinner = (spinnerClassName, { ...others }) => (
    <div className="rclDefaultSpinner" {...others} />
  );

  const renderCustomSpinner = (spinnerClassName, { ...others }) => (
    <div className="renderDotSpinner" {...others}>
      <div className="renderDotSpinner--dot" />
      <div className="renderDotSpinner--dot" />
      <div className="renderDotSpinner--dot" />
    </div>
  );

  const renderSpinner = (spinnerClassName, { ...others }) =>
    renderDefaultSpinner(spinnerClassName, { ...others });

  const renderDotSpinner = (spinnerClassName, { ...others }) =>
    renderCustomSpinner(spinnerClassName, { ...others });

  const { spinnerClassName, className, spinner, overlayEnabled, ...others } = props;
  if (overlayEnabled) {
    return (
      <div className={className}>
        {spinner
          ? renderSpinner(spinnerClassName, { ...others })
          : renderDotSpinner(spinnerClassName, { ...others })}
      </div>
    );
  }
  return '';
};

Spinner.defaultProps = {
  spinnerClassName: null,
  spinner: null,
  others: null,
  overlayEnabled: false,
};

export default withStyles(Spinner, styles);
export { Spinner as SpinnerVanilla };

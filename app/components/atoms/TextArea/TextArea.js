// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './TextArea.style';
import withStyles from '../../../lib/withStyles';

type Props = {
  className: string,
  id: string | number,
  labelContent?: string,
  iconClass?: string,
  inheritedStyles?: string,
  isError?: boolean,
  errorMessage: string,
  hideLabel?: boolean,
};

const TextArea = ({
  className,
  id,
  labelContent,
  iconClass,
  isError,
  errorMessage,
  hideLabel,
  inheritedStyles,
  ...others
}: Props): Node => (
  <div className={className}>
    <label htmlFor={id}>
      <span className={`${hideLabel ? 'is-hidden' : ''}`}>{labelContent}</span>

      {iconClass ? <i className={iconClass} /> : null}
      <textarea data-error={isError} id={id} {...others} />
    </label>
    {isError && errorMessage ? <p className="error">{errorMessage}</p> : null}
  </div>
);

TextArea.defaultProps = {
  labelContent: null,
  iconClass: '',
  inheritedStyles: '',
  isError: false,
  hideLabel: false,
};

export default withStyles(TextArea, styles);
export { TextArea as TextAreaComponent };

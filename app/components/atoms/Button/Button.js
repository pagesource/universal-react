// @flow
import type { Node } from 'react';

import styles from './Button.style';
import withStyles from '../../../lib/withStyles';
import Spinner from '../../atoms/Spinner';

type Props = {
  className: string,
  children: Node,
  inheritedStyles?: string,
  type?: string,
  primary?: boolean,
  secondary?: boolean,
  elementRef?: any => void,
  loader?: boolean,
  loaderPositionCenter?: boolean,
  disabled?: boolean,
  ariaLabel?: string,
  tabIndex?: string,
};

const Button = ({
  className,
  children,
  inheritedStyles,
  type,
  primary,
  secondary,
  elementRef,
  loader,
  loaderPositionCenter,
  disabled,
  ariaLabel,
  tabIndex,
  ...others
}: Props): Node => (
  <button
    className={className}
    type={type}
    {...others}
    ref={elementRef}
    disabled={disabled || loader}
    aria-label={ariaLabel || null}
    tabIndex={tabIndex || null}
  >
    {loader && (
    <div className={`spinner ${loaderPositionCenter ? 'center-spinner' : ''}`}>
      <Spinner overlayEnabled spinner />
    </div>
      )}
    {children}
  </button>
);

Button.defaultProps = {
  inheritedStyles: '',
  type: 'button',
  primary: false,
  secondary: false,
  elementRef: undefined,
  loader: false,
  disabled: false,
  loaderPositionCenter: false,
  ariaLabel: '',
  tabIndex: '',
};

export default withStyles(Button, styles);
export { Button as ButtonVanilla };

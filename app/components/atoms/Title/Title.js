// @flow
import type { Node } from 'react';
import styles from './Title.style';
import withStyles from '../../../lib/withStyles';

type Props = {
  children: Node,
  className: string,
  inheritedStyles?: string,
};

const Title = ({
  children, className, inheritedStyles, ...others
}: Props): Node => (
  <h1 className={className} {...others}>
    {children}
  </h1>
);

Title.defaultProps = {
  inheritedStyles: '',
};

export default withStyles(Title, styles);

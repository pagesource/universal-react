// @flow
import type { Node } from 'react';
import Link from 'next/link';
import styles from './NavBar.style';
import withStyles from '../../../lib/withStyles';
import type { Props } from './types';

const NavBar = ({ className }: Props): Node => (
  <nav className={className}>
    <Link href="/error">
      <a>Hello</a>
    </Link>
  </nav>
);

NavBar.defaultProps = {};

export default withStyles(NavBar, styles);

export { NavBar };

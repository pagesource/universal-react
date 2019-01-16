// @flow
/**
 * Header
 */
import type { Node } from 'react';
import Link from 'next/link';
import type { Props } from './types';
import NavBar from '../../molecules/NavBar';

const Header = ({ className }: Props): Node => (
  <div className={className}>
    <header id="header">
      <Link href="/">
        <a className="logo">Sample Logo</a>
      </Link>
      <NavBar />
    </header>
  </div>
);

Header.defaultProps = {};

export default Header;

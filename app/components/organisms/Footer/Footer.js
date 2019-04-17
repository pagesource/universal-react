/**
 *
 * Footer
 *
 */
// @flow
import React from 'react';
import type { Node } from 'react';
import type { Props } from './types';
import withStyles from '../../../lib/withStyles';
import NavBar from '../../molecules/NavBar';
import styles from './Footer.style';

const Footer = ({ className, nav }: Props): Node => (
  <footer className={className} id="footer">
    <div className="inner">
      <div className="footer-links">
        <h3>Footer Links</h3>
        {nav && <NavBar vertical items={nav} />}
      </div>
      <div className="copyright">
        <span>&copy; PageSource | </span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {};

export default withStyles(Footer, styles);

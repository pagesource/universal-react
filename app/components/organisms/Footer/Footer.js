/**
 *
 * Footer
 *
 */
// @flow
import React from 'react';
import type { Node } from 'react';
import type { Props } from './types';

const Footer = ({ className }: Props): Node => (
  <footer className={className} id="footer">
    <div className="inner">
      <div className="content">
        <section>
          <h3>Accumsan montes viverra</h3>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non
            mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante
            lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum
            dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
            iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent.
            Nunc lacinia ante nunc ac gravida.
          </p>
        </section>
        <section>
          <h4>Sem turpis amet semper</h4>
          <ul className="alt">
            <li>
              <a href="/link1">Dolor pulvinar sed etiam.</a>
            </li>
            <li>
              <a href="/link2">Etiam vel lorem sed amet.</a>
            </li>
            <li>
              <a href="/link3">Felis enim feugiat viverra.</a>
            </li>
            <li>
              <a href="/link4">Dolor pulvinar magna etiam.</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="copyright">
        <span>&copy; Untitled. Photos</span>
        <a href="https://unsplash.co">Unsplash</a>
        <span>, Video</span>
        <a href="https://coverr.co">Coverr</a>
        <span>.</span>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {};

export default Footer;

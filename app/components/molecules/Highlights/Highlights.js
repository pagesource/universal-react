/** * * Highlights * */

// @flow
import { PureComponent } from 'react';
import styles from './Highlights.style';
import withStyles from '../../../lib/withStyles';
import type { Props } from './types';

class Highlights extends PureComponent<Props> {
  static defaultProps = {};

  render() {
    const { className } = this.props;
    return (
      <section className={`wrapper ${className}`}>
        <div className="inner">
          <header className="special">
            <h2>Sem turpis amet semper</h2>
            <p>
              In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac
              integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.
            </p>
          </header>
          <div className="highlights">
            <section>
              <div className="content">
                <header>
                  <a href="/dummy" className="icon fa-vcard-o">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Feugiat consequat</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                  porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="/dummy" className="icon fa-files-o">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Ante sem integer</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                  porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="/dummy" className="icon fa-floppy-o">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Ipsum consequat</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                  porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="/dummy" className="icon fa-line-chart">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Interdum gravida</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                  porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="/dummy" className="icon fa-paper-plane-o">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Faucibus consequat</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                  porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="/dummy" className="icon fa-qrcode">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Accumsan viverra</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                  porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
export default withStyles(Highlights, styles);
export { Highlights };

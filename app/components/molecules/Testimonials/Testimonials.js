/** * * Testimonials * */

// @flow
import { PureComponent } from 'react';
import styles from './Testimonials.style';
import withStyles from '../../../lib/withStyles';
import type { Props } from './types';

class Testimonials extends PureComponent<Props> {
  static defaultProps = {};

  render() {
    const { className } = this.props;

    return (
      <section className={`wrapper ${className}`}>
        <div className="inner">
          <header className="special">
            <h2>Faucibus consequat lorem</h2>
            <p>
              In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac
              integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.
            </p>
          </header>
          <div className="testimonials">
            <section>
              <div className="content">
                <blockquote>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                    porttitor sem non mi integer non faucibus.
                  </p>
                </blockquote>
                <div className="author">
                  <div className="image">
                    <img src="/static/images/pic01.jpg" alt="" />
                  </div>
                  <p className="credit">
                    - <strong>Jane Doe</strong> <span>CEO - ABC Inc.</span>
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="content">
                <blockquote>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                    porttitor sem non mi integer non faucibus.
                  </p>
                </blockquote>
                <div className="author">
                  <div className="image">
                    <img src="/static/images/pic03.jpg" alt="" />
                  </div>
                  <p className="credit">
                    - <strong>John Doe</strong> <span>CEO - ABC Inc.</span>
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="content">
                <blockquote>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio
                    porttitor sem non mi integer non faucibus.
                  </p>
                </blockquote>
                <div className="author">
                  <div className="image">
                    <img src="/static/images/pic02.jpg" alt="" />
                  </div>
                  <p className="credit">
                    - <strong>Janet Smith</strong> <span>CEO - ABC Inc.</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
export default withStyles(Testimonials, styles);
export { Testimonials };

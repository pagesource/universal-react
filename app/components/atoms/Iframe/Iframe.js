// @flow
import React, { PureComponent } from 'react';
import styles from './Iframe.style';
import withStyles from '../../../lib/withStyles';

type Props = {
  className: string,
  sourceUrl: string,
  iframeTitle: string,
  inheritedStyles?: string | {},
  onLoad?: (SyntheticEvent<>) => void,
  width?: string,
  height?: string,
  takeContentHeight?: boolean,
  frameBorder?: string,
};

type State = {
  frameHeight: string,
};

class Iframe extends PureComponent<Props, State> {
  static defaultProps = {
    inheritedStyles: '',
    width: '100%',
    height: '100%',
    frameBorder: '0',
    takeContentHeight: false,
    onLoad: () => {},
  };

  state = {
    frameHeight: '100%',
  };

  iframe = <iframe title="no iframe" />;

  render() {
    const {
      className,
      sourceUrl,
      iframeTitle,
      inheritedStyles,
      onLoad,
      width,
      height,
      takeContentHeight,
      frameBorder,
      ...others
    }: Props = this.props;

    const { frameHeight } = this.state;

    /* eslint-disable */
    // $flow-disable-line
    const { contentWindow } = this.iframe || {};
    /* eslint-enabled */

    return (
      <iframe
        ref={iframe => {
          this.iframe = iframe;
        }}
        className={className}
        title={iframeTitle}
        src={sourceUrl}
        width={width}
        height={takeContentHeight ? frameHeight : height}
        frameBorder={frameBorder}
        onLoad={event => {
          if (takeContentHeight) {
            this.setState({
              frameHeight: `${contentWindow.document.body.scrollHeight}px`,
            });
          }
          if (typeof onLoad === 'function') {
            onLoad(event);
          }
        }}
        {...others}
      />
    );
  }
}

export default withStyles(Iframe, styles);
export { Iframe as IframeComponent };

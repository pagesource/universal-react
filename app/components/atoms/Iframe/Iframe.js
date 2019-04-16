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

    let contentWindow;
    if (this.iframe && this.iframe.contentWindow) {
      contentWindow = { ...this.iframe }.contentWindow; // eslint-disable-line
    } else if (this.iframe && this.iframe.contentDocument) {
      contentWindow = { ...this.iframe }.contentDocument;
    }

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
            // $FlowFixMe eslint-disable-line
            const { document } = this.iframe.contentWindow;
            this.setState({
              frameHeight: `${document ? document.body.scrollHeight : 0}px`,
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

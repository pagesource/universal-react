// @flow
import type { Node } from 'react';
import React, { PureComponent } from 'react';
import unescape from 'lodash/unescape';
import memoizeLast from '../../utils/memoizeLast';

type Props = {
  content: string,
  hasScript?: boolean,
  wrapper?: Node,
};

/**
 * Component to insert the HTML content from the ATG BCC layer
 * which is authorable by the content authors (product team)
 */
class ContentSlotUnsafeHTML extends PureComponent<Props> {
  static defaultProps = {
    hasScript: true,
    wrapper: React.Fragment,
  };

  static scriptRegEx = /(<script\b[^>]*>[\s\S]*?<\/script>)/gm;

  // Regex to replace HTML ASCII code &#034 (coming as escaped HTML from server code) to `"`
  static htmlDecode = (input: string = '') =>
    input && input.replace ? unescape(input.replace(/&#034;/gi, '"')) : '';

  static createMarkupForBody = memoizeLast(contentSlotUnsafeHTML => ({
    __html: ContentSlotUnsafeHTML.htmlDecode(contentSlotUnsafeHTML).replace(
      ContentSlotUnsafeHTML.scriptRegEx,
      ''
    ),
  }));

  static extractScripts = (input: string) => {
    let match = ContentSlotUnsafeHTML.scriptRegEx.exec(input);
    const scriptList: Array<string> = [];
    while (match) {
      scriptList.push(match[0]);
      match = ContentSlotUnsafeHTML.scriptRegEx.exec(input);
    }
    return scriptList;
  };

  componentDidMount = () => {
    const { hasScript } = this.props || undefined;
    const { body, createRange } = window && window.document;

    if (hasScript && document && document.createRange) {
      const { content } = this.props;
      const scriptList = ContentSlotUnsafeHTML.extractScripts(content);
      const range = createRange();
      range.setStart(body, 0);
      body.appendChild(range.createContextualFragment(scriptList.join('')));
    }
  };

  render(): Node {
    const { content, wrapper, hasScript, ...other } = this.props;

    /* eslint-disable */
    const Wrapper = wrapper;
    return wrapper ? (
      // $flow-disable-line
      <Wrapper>
        <div
          dangerouslySetInnerHTML={ContentSlotUnsafeHTML.createMarkupForBody(content)}
          {...other}
        />
      </Wrapper>
    ) : (
      <div
        dangerouslySetInnerHTML={ContentSlotUnsafeHTML.createMarkupForBody(content)}
        {...other}
      />
    );
    /* eslint-enable */
  }
}

export default ContentSlotUnsafeHTML;

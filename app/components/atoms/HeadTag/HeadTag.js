// @flow
import Head from 'next/head';
import React, { PureComponent } from 'react';

import config from './HeadTag.config';

import type { Props, MetaProps } from './types';

export const MetaTag = (props: MetaProps) => {
  const attrs = {
    content: { ...props }.content,
  };

  /* eslint-disable */
  // $FlowFixMe
  attrs[props.prefix && props.prefix === 'og' ? 'property' : 'name'] = props.prefix
    ? `${props.prefix}:${props.meta.key}`
    : props.meta.key;
  /* eslint-enable */

  return <meta {...attrs} />;
};

class HeadTag extends PureComponent<Props> {
  render() {
    const { title, schema } = this.props;
    const { META_KEYS, LINK } = config;
    return (
      <Head>
        <title>{title}</title>
        {META_KEYS.map(meta => {
          const content = { ...this.props }[meta.serverKey] || { ...this.props }[meta.key];
          if (!content) {
            return null;
          }
          return meta.prefix ? (
            meta.prefix.map(prefix => (
              <MetaTag
                key={`meta-${prefix}-${meta.id}`}
                prefix={prefix}
                meta={meta}
                content={content}
              />
            ))
          ) : (
            <MetaTag key={`meta-${meta.id}`} meta={meta} content={content} />
          );
        })}
        {LINK.map(key =>
          ({ ...this.props }[key] ? (
            <link rel={key} href={{ ...this.props }[key]} key={key} />
          ) : null)
        )}

        {/* eslint-disable react/no-danger */}
        {schema ? (
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
            type="application/ld+json"
          />
        ) : null}
      </Head>
    );
  }
}

HeadTag.defaultProps = {
  title: '',
  schema: undefined,
};

MetaTag.defaultProps = {};

export default HeadTag;

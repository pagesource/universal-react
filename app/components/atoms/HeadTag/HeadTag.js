// @flow

import Head from 'next/head';
import { PureComponent } from 'react';

import config from './HeadTag.config';

type Props = {
  title?: string,
  schema?: any,
};

type MetaProps = {
  prefix?: string,
  meta: {
    id: number,
    key: string,
    content: string,
  },
  content: string,
};

export const MetaTag = (props: MetaProps) => {
  const attrs = {
    content: props.content,
  };
  // eslint-disable-next-line
  attrs[props.prefix && props.prefix === 'og' ? 'property' : 'name'] = props.prefix
    ? `${props.prefix}:${props.meta.key}`
    : props.meta.key;

  return <meta {...attrs} />;
};

class HeadTag extends PureComponent<Props> {
  static defaultProps = {
    title: '',
    schema: undefined,
  };

  render() {
    const { title, schema } = this.props;
    const { META_KEYS, LINK } = config;
    return (
      <Head>
        {/* eslint-disable react/no-danger */}
        <title>{title}</title>
        {META_KEYS.map((meta) => {
          const content = this.props[meta.serverKey || meta.key];
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
        {LINK.map(key => (this.props[key]
          ? <link rel={key} href={this.props[key]} key={key} />
          : null))}

        {/* eslint-disable react/no-danger */}
        {schema ? (
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
            type="application/ld+json"
          />
        ) : null}
        {/* eslint-enable react/no-danger */}
      </Head>
    );
  }
}

MetaTag.defaultProps = {
  prefix: undefined,
};

export default HeadTag;

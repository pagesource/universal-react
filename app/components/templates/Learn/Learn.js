// @flow
import React, { Component } from 'react';
import get from 'lodash/get';
import dynamic from 'next/dynamic';

import { AnchorVanilla as Anchor } from '@xt-pagesource/atomic-react-pattern-lib';
import Layout from '../Layout';
import enhance from '../../../lib/dynamicStore';
import initialActions from './Learn.actions';
import HeadTag from '../../atoms/HeadTag';
import saga from './Learn.saga';
import reducer from './Learn.reducer';
import FeatureBanner from '../../molecules/FeatureBanner';

const ArticleWrap = dynamic(() => import('../../molecules/ArticleWrap'), {
  loading: () => <p>...</p>,
});

class LearnPage extends Component<any> {
  linkArray = [
    {
      title: 'Development Tools',
      link:
        'https://github.com/pagesource/universal-react/blob/master/readme/02-DevelopmentTools.md',
    },
    {
      link: 'https://github.com/pagesource/universal-react/blob/master/readme/07-QualityControl.md',
      title: 'Static Code Linters and Code Formatter',
    },
    {
      link: 'http://bradfrost.com/blog/post/atomic-web-design/',
      title: 'Atomic Design',
      nofollow: true,
    },
    {
      link:
        'https://github.com/pagesource/universal-react/blob/master/readme/04-FolderStructure.md',
      title: 'Folder Structure',
    },
    {
      link: 'https://github.com/pagesource/universal-react/blob/master/readme/03-Generators.md',
      title: 'Component Scaffolding',
    },
    {
      link: 'https://github.com/pagesource/universal-react/blob/master/readme/05-FlowType.md',
      title: 'Flow Type',
    },
    {
      link:
        'https://github.com/pagesource/universal-react/blob/master/readme/07-QualityControl.md#husky',
      title: 'Husky',
    },
    {
      link: 'https://github.com/pagesource/universal-react/blob/master/readme/ESDocs.md',
      title: 'ES Docs',
    },
    {
      link: 'https://github.com/pagesource/universal-react/blob/master/readme/06-Storybook.md',
      title: 'Storybook',
    },
    {
      link: 'https://github.com/pagesource/universal-react/blob/master/readme/08-Test.md',
      title: 'Running The Tests',
    },
  ];

  static getInitialProps({ res }: any) {
    if (res && res.redirect) {
      res.status(404);
    }
    return {};
  }

  render() {
    return (
      <Layout title="error" className="row" id="content-wrapper" tabindex="-1">
        <HeadTag
          description="Universal React - boilerplate for server side rendered react applications"
          title="Universal React Ramp Up - boilerplate"
        />
        <div id="ramp-up-page">
          <FeatureBanner
            heading="Universal React"
            className="ramp-up-banner"
            subheading="Ramp-up"
          />
        </div>
        <ArticleWrap title="Topics to ramp-up" className="ramp-up-wrap">
          <ul>
            {this.linkArray.map((val, key) => {
              return (
                <li className="with-link" key={key.toString()}>
                  <Anchor to={val.link} target="_blank" rel={val.nofollow ? 'nofollow' : null}>
                    {val.title}
                  </Anchor>
                </li>
              );
            })}
          </ul>
        </ArticleWrap>
      </Layout>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  state,
  errorData: get(state, ['learnPage', 'learnPageData']),
});

export default enhance(LearnPage, {
  mapStateToProps,
  saga,
  reducer,
  key: 'learnPage',
  initialActions,
});

export { LearnPage as LearnPageDisconnected };

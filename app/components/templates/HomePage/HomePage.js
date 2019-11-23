// @flow
import React from 'react';
import type { Node } from 'react';

import {
  AnchorVanilla as Anchor,
  ImageVanilla as Image,
  ListVanilla as List,
  ParaVanilla as Para,
} from '@xt-pagesource/atomic-react-pattern-lib';

import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import TopBanner from '../../molecules/TopBanner';
import type { Props } from './types';
import withStyles from '../../../lib/withStyles';
import styles from './HomePage.style';
import ArticleWrap from '../../molecules/ArticleWrap';
// import reactLogo from '/static/images/logo/react.jpg';

const HomePage = ({ editorialData }: Props): Node => {
  const { title, subTitle } = editorialData;
  const tickerPoints = [
    'Universal Rendering',
    'Quality Control',
    'PWA Compliant',
    'Static Site Generator',
    'State Management & Dynamic Store',
    'Component Generators',
    'Analytics',
    'Security',
    'Caching Capabilities',
    'Lazy loading',
    'Dynamic Import',
    'Performance & Accessibility',
  ];

  const ecosystemList = [
    {
      title: 'Development Environment',
      desc: 'Storybook integrated for developing and showcasing components.',
    },
    {
      title: 'Flow typed ',
      desc: 'All components are FlowTyped and Flow Type checked.',
    },
    {
      title: 'Component scaffolding ',
      desc: 'Consistently generate components using Plop.',
    },
    {
      title: 'Documentation ',
      desc: 'Generates code documentation with ESDocs.',
    },
    {
      title: 'Git Hooks ',
      desc: 'Pre-commit, Pre-push and pre-publish using Husky.',
    },
    {
      title: 'Next.js ',
      desc: 'to render react application server side and more.',
    },
    {
      title: 'Unit testing framework ',
      desc: 'with Jest and Enzyme.',
    },
    {
      title: 'Theme and Styling ',
      desc: 'with Styled Components.',
    },
    {
      title: 'Dynamic Authoring ',
      desc: 'of pages with headless CMS.',
    },
    {
      title: 'Static Code Quality checks and formatting ',
      desc: 'Javascript and CSS linting using Eslint, Stylelint and Prettier.',
    },
    {
      title: 'PWA ',
      desc: 'application.',
    },
  ];

  const techDependencyArray = [
    {
      link: 'https://reactjs.org/',
      imagePath: '/static/images/logo/react.png',
      altText: 'React Logo',
      titleText: 'React',
    },
    {
      link: 'https://nextjs.org/',
      imagePath: '/static/images/logo/next.png',
      altText: 'Next js Logo',
      titleText: 'Next js',
    },
    {
      link: 'https://redux.js.org/',
      imagePath: '/static/images/logo/redux.png',
      altText: 'Redux Logo',
      titleText: 'Redux',
    },
    {
      link: 'https://expressjs.com/',
      imagePath: '/static/images/logo/express-js.png',
      altText: 'Express js Logo',
      titleText: 'Express js',
    },
    {
      link: 'https://storybook.js.org/',
      imagePath: '/static/images/logo/storybook-react.png',
      altText: 'Storybook React Logo',
      titleText: 'Storybook React',
    },
    {
      link: 'https://github.com/GoogleChrome/lighthouse',
      imagePath: '/static/images/logo/lighthouse-ci.png',
      altText: 'lighthouse ci Logo',
      titleText: 'Lighthouse CI',
    },
    {
      link: 'https://www.styled-components.com/',
      imagePath: '/static/images/logo/style-component.png',
      altText: 'Style component Logo',
      titleText: 'Style component',
    },
    {
      link: 'https://jestjs.io/',
      imagePath: '/static/images/logo/jest.png',
      altText: 'Jest Logo',
      titleText: 'Jest',
    },
    {
      link: 'https://github.com/typicode/husky',
      imagePath: '/static/images/logo/husky.png',
      altText: 'Husky Logo',
      titleText: 'Husky',
    },
  ];

  return (
    <Layout title="home" className="row" id="content-wrapper">
      <HeadTag
        description="Universal React - accelerator for server side rendered react applications"
        title="Universal React"
      />
      <TopBanner title="Universal React" subTitle={subTitle} tickerPoints={tickerPoints} />
      <section className="main-wrapper">
        <ArticleWrap title="Why Universal React?" className="why-universal">
          <Para>
            An Accelerator for Optimal Dev Ecosystems and Scalable Architecture. This can be
            utilized as baseline for development of all types of projects, to achieve dependable
            delivery standards. This ecosystem doesn&apos;t intend to provide lot of out of the box
            code/components but a well configured development environment and delivery pipeline,
            having balanced focus to Static Code Quality, Performance, Processes, Security,
            Testability and Best Practices. This boilerplate will help project teams in building
            applications with great quality, by giving them more time to focus on business problems
            rather than web development chores.
          </Para>
        </ArticleWrap>
        <ArticleWrap title="Entities of this Ecosystem" className="entity-ecosystem">
          <List>
            {ecosystemList.map((val, key) => {
              return (
                <li key={key.toString()}>
                  <div className="title">{val.title}</div>
                  <div className="desc">{val.desc}</div>
                </li>
              );
            })}
          </List>
        </ArticleWrap>
        <ArticleWrap title="Main Technology Dependencies" className="tech-dependency">
          <List>
            {techDependencyArray.map((val, key) => {
              return (
                <li key={key.toString()}>
                  <Anchor to={val.link} target="_blank" rel="nofollow">
                    <div className="image-wrapper">
                      <Image src={val.imagePath} alt={val.altText} title={val.titleText} />
                    </div>
                  </Anchor>
                </li>
              );
            })}
          </List>
        </ArticleWrap>
        <ArticleWrap title="Installation" className="installation-wrap">
          <Para>
            Fork the repository & install dependencies using the yarn/npm command line tools.
          </Para>
          <code>
            yarn install
            <br />
            <br />
            yarn run flow:install
          </code>
          {/* <code>yarn run flow:install</code> */}
          <br />
          <Para>
            flow:install will search the&nbsp;
            <Anchor href="https://github.com/flow-typed/flow-typed/blob/master/README.md">
              libdef
            </Anchor>
            &nbsp;repo and download all the libdefs that are relevant for our project and install
            them for us.
          </Para>
        </ArticleWrap>
      </section>
    </Layout>
  );
};

HomePage.defaultProps = {
  seoData: {
    description: 'Home Page Description',
    title: 'Home page',
  },
  editorialData: {},
};

export default withStyles(HomePage, styles);
export { HomePage };

// @flow
import React from 'react';
import type { Node } from 'react';
import { AnchorVanilla as Anchor } from '@xt-pagesource/atomic-react-pattern-lib';
import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import TopBanner from '../../molecules/TopBanner';
import type { Props } from './types';

const HomePage = ({ editorialData }: Props): Node => {
  const { title, subTitle } = editorialData;
  return (
    <Layout title="home" className="row" id="content-wrapper">
      <HeadTag
        description="Universal React - boilerplate for server side rendered react applications"
        title="Universal React - boilerplate"
      />
      <TopBanner title={title} subTitle={subTitle} />
      <section className="wrapper">
        <div className="inner">
          <h2>Why Universal React?</h2>
          <p>
            A community accepted and reliable XT Dev Ecosystem, that can be utilized as baseline for
            development of all types of projects, to achieve dependable delivery standards. This
            ecosystem doesn&apos;t intend to provide lot of out of the box code/components but a
            well configured development environment and delivery pipeline, having balanced focus to
            Static Code Quality, Performance, Processes, Security, Testability and Best Practices.
            This boilerplate will help project teams in building applications with great quality, by
            giving them more time to focus on business problems rather than web development chores.
          </p>
          <h2>Entities of this Ecosystem</h2>
          <ul>
            <li>
              <strong>Development Environment:</strong>
              Storybook integrated for developing and showcasing components.
            </li>
            <li>
              <strong>Flow typed:</strong>
              All components are FlowTyped and Flow Type checked.
            </li>
            <li>
              <strong>Static Code Quality checks and formatting:</strong>
              Javascript and CSS linting using Eslint, Stylelint and Prettier.
            </li>
            <li>
              <strong>Component scaffolding:</strong>
              Consistently generate components using Plop.
            </li>
            <li>
              <strong>Documentation:</strong>
              Generates code documentation with ESDocs.
            </li>
            <li>
              <strong>Git Hooks:</strong>
              Pre-commit, Pre-push and pre-publish using Husky.
            </li>
            <li>
              <strong>Unit testing framework:</strong>
              with Jest and Enzyme.
            </li>
            <li>
              <strong>Theme and Styling:</strong>
              with Styled Components.
            </li>
            <li>
              <strong>Next.js:</strong>
              to render react application server side and more.
            </li>
            <li>
              <strong>PWA:</strong>
              application.
            </li>
            <li>
              <strong>Dynamic Authoring:</strong>
              of pages with headless CMS.
            </li>
          </ul>
          <h2>Main Technology Dependencies</h2>
          <ol>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Node.js</li>
          </ol>
          <h2>Installation</h2>
          <p>Fork the repository & install dependencies using the yarn/npm command line tools.</p>
          <pre>yarn install</pre>
          <pre>yarn run flow:install</pre>
          <p>
            flow:install will search the
            <Anchor href="https://github.com/flow-typed/flow-typed/blob/master/README.md">
              libdef
            </Anchor>
            repo and download all the libdefs that are relevant for our project and install them for
            us.
          </p>
          <h2>Topics to ramp-up</h2>
          <ul>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/DevelopmentTools.md">
                Development Tools
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/StaticCodeLinters.md">
                Static Code Linters and Code Formatter
              </Anchor>
            </li>
            <li>
              <Anchor href="http://bradfrost.com/blog/post/atomic-web-design/" rel="nofollow">
                Atomic Design
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/FolderStructure.md">
                Folder Structure
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/Component.md">
                Component Scaffolding
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/FlowType.md">
                Flow Type
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/Husky.md">
                Husky
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/ESDocs.md">
                ES Docs
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/Storybook.md">
                Storybook
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/Test.md">
                Running The Tests
              </Anchor>
            </li>
          </ul>
        </div>
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

export default HomePage;

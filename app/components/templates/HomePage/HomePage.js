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
      <HeadTag description="Home Page Description" title="Home page" />
      <TopBanner title={title} subTitle={subTitle} />
      <section className="wrapper">
        <div className="inner">
          <h1>Universal React</h1>
          <p>
            To assemble a reliable and community accepted XT Dev Ecosystem, that can be utilized as
            baseline for development of each project with dependable quality standards. This
            &quot;Universal React&quot; boilerplate will not limit/restrict any team on further
            improving it, but ensure that projects are meeting minimum quality and best practices
            with this ecosystem. This ecosystem doesn&apos;t intend to provide a lot of out of the
            box code/components or features but a well configured development environment and
            delivery pipeline, having balanced focus to Static Code Quality, Performance, Processes,
            Security, Testability, Documentation and Best Practices.
          </p>
          <h2>Ecosystem of this refrence architecture</h2>
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
            <li>Babel 7 to transpiling javascript and releasing them as ESModules.</li>
            <li>
              <strong>Theme and Styling:</strong>
              with Styled Components.
            </li>
          </ul>
          <h2>Dependencies</h2>
          <ol>
            <li>react</li>
            <li>next.js</li>
            <li>redux</li>
          </ol>
          <h2>Installation</h2>
          <p>Dependencies should be installed using the yarn command line tools.</p>

          <pre>yarn install yarn run flow:install</pre>
          <p>
            flow:install will search the
            <Anchor href="https://github.com/flow-typed/flow-typed/blob/master/README.md">
              <code>libdef</code>
            </Anchor>
            repo and download all the libdefs that are relevant for our project and install them for
            us.
          </p>
          <h2>Topics to refer</h2>
          <ul>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/02-DevelopmentTools.md">
                Development Tools
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/07-QualityControl.md">
                Static Code Linters and Code Formatter
              </Anchor>
            </li>
            <li>
              <Anchor href="http://bradfrost.com/blog/post/atomic-web-design/" rel="nofollow">
                Atomic Design
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/04-FolderStructure.md">
                Folder Structure
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/03-Generators.md">
                Component Scaffolding
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/05-FlowType.md">
                Flow Type
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/07-QualityControl.md#husky">
                Husky
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/ESDocs.md">
                ES Docs
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/06-Storybook.md">
                Storybook
              </Anchor>
            </li>
            <li>
              <Anchor to="https://github.com/pagesource/universal-react/blob/master/readme/08-Test.md">
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

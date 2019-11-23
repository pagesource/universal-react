// @flow
import React, { Component } from 'react';
import get from 'lodash/get';
import dynamic from 'next/dynamic';

import {
  ImageVanilla as Image,
  ListVanilla as List,
  ParaVanilla as Para,
} from '@xt-pagesource/atomic-react-pattern-lib';

// import { Prism as S } from 'react-syntax-highlighter';
// import styles from 'react-syntax-highlighter/dist/esm/styles/prism/dark';
import Layout from '../Layout';
import enhance from '../../../lib/dynamicStore';
import initialActions from './Features.actions';
import HeadTag from '../../atoms/HeadTag';
import TopBanner from '../../molecules/TopBanner';
import saga from './Features.saga';
import reducer from './Features.reducer';

const Prism = dynamic(() => import('react-syntax-highlighter'), { ssr: false });

const ArticleWrap = dynamic(() => import('../../molecules/ArticleWrap'), {
  loading: () => <p>...</p>,
});

class FeaturesPage extends Component<any> {
  static getInitialProps({ res }: any) {
    if (res && res.redirect) {
      res.status(404);
    }
    return {};
  }

  tickerPoints = [
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

  render() {
    return (
      <Layout title="error" className="row" id="content-wrapper" tabindex="-1">
        <HeadTag
          description="Universal React - boilerplate for server side rendered react applications"
          title="Universal React Features - boilerplate"
        />
        <div id="feature-page">
          <TopBanner
            title="Universal React"
            className="features-banner"
            subHeading="OOTB Features"
            tickerPoints={this.tickerPoints}
          />
          <ArticleWrap
            title="Universal Rendering"
            isLeft="true"
            subtitle="Universal rendering involves sending the fully rendered application markup in the initial payload to the browser and loading the application code afterward"
          >
            <List>
              <li>Server-Side Rendering Done Right with Next.js</li>
              <li>Better for perceived performance</li>
              <li>Optimized for Discovery (SEO Ready)</li>
            </List>
            <div className="image-wrapper text-center">
              <Image
                src="/static/images/universal-rendering.png"
                alt="universal rendering"
                className="width-60"
              />
            </div>
          </ArticleWrap>
          <ArticleWrap
            title="Quality Control"
            isLeft="true"
            className="grey"
            subtitle="Use the industry standard tools to maintain the code quality standards"
          >
            <List>
              <li>Linting with ESLint &amp; StyleLint.</li>
              <li>Type Checking with Flow.</li>
              <li>Git Hooks for commit validation with Husky.</li>
              <li>Unit testing with Jest &amp; Enzyme.</li>
              <li>Vendor prefixing with Post CSS.</li>
              <li>Code Uniformity with Prettier &amp; Editor Config.</li>
              <li>Storybook for dev Env. and showcase. </li>
              <li>Performance measurement with Lighthouse CI. </li>
              <li>ESDoc for API documentation</li>
            </List>
          </ArticleWrap>
          <ArticleWrap
            title="PWA Compliant"
            isLeft="true"
            subtitle="Progressive Web Apps provide an installable, app-like experience that are built and delivered directly via the web"
          >
            <div className="image-wrapper text-center">
              <Image src="/static/images/pwa.png" alt="pwa" className="width-60" />
            </div>
            <List>
              <li>Using Next-offline which is based on Google’s workbox-webpack-plugin.</li>
              <li>
                Zero configuration setup, by default pre-cache all webpack generated resources.
              </li>
              <li>
                Configuration to Provide different caching strategies based on type of resource or
                URI.
              </li>
            </List>
          </ArticleWrap>
          <ArticleWrap
            title="Static Site Generator"
            isLeft="true"
            className="grey"
            subtitle="Generates all the pages of the website at once. This means there’s no moving parts in the developed website"
          >
            <div className="image-wrapper">
              <Image
                src="/static/images/static-site-generator.png"
                className="full-width"
                alt="static-site-generator"
              />
            </div>
            <List>
              <li>Export React apps as static HTML pages.</li>
              <li>Caching gets easier, Performance goes up.</li>
              <li>Dynamic pages gets generated with static content</li>
            </List>
          </ArticleWrap>
          <ArticleWrap
            title="State Management & Dynamic Store"
            isLeft="true"
            subtitle="A HOC for page level components that connects itself to a Redux store taking in mapStateToProps and mapDispatchToProps"
          >
            <List>
              <li>Uses Redux, Redux-Saga, Reselect. </li>
              <li>Easier integration of react redux ecosystem. </li>
              <li>Fires initial actions for the route/components. </li>
              <li>Zero config for setting up any kind of side effect management.</li>
              <li>Helps in Code Splitting & Modularizing.</li>
              <li>Lighter initial JS and Store footprint.</li>
            </List>
          </ArticleWrap>
          <ArticleWrap
            title="Component Generators"
            isLeft="true"
            className="grey"
            subtitle="Using Plop, a micro-generator framework that makes it easy for an entire team to create files with a level of uniformity."
          >
            <List>
              <li>No need to copy, paste, rename and clean old components to create new ones.</li>
              <li>Generate component templates consistently.</li>
              <li>Easily update templates.</li>
            </List>
            <div className="image-wrapper">
              <Image
                src="/static/images/component-generators.png"
                alt="component generators"
                className="full-width"
              />
            </div>
          </ArticleWrap>
          <ArticleWrap
            title="Analytics"
            isLeft="true"
            subtitle="Track all user actions through Redux middleware chain or with simple API."
          >
            <List>
              <li>Analytics redux middleware.</li>
              <li>Easy Config options for action tracking.</li>
              <li>Separation of concern.</li>
              <li>Vendor agnostic. </li>
            </List>
            <Prism language="javascript">
              {`// @flow
import type { TrackerObject, ActionType } from './types';
import { trackActions } from './helpers/trackerEvents';

/**
 * Simple redux middleware to use redux actions as input of tracking!
 * this will call the track function from the provided instance of tracker on every action
 * and use the action type as the event type and the action payload as the event data
 * @param {Object} tracker
 */
export const trackingMiddleware = (tracker: TrackerObject) => () => (next: any) => (
  action: ActionType
) => {
  if (tracker && tracker.instance) {
    const { actions } = tracker;
    const { type, data } = action;
    if (actions && actions.length > 0 && actions.includes(type)) {
      trackActions({ type, data });
    }
  }
  next(action);
};

export default trackingMiddleware;
`}
            </Prism>
          </ArticleWrap>
          <ArticleWrap title="Security" isLeft="true" className="grey">
            <div className="sub-heading">
              Without a proactive security strategy, businesses risk the spread and escalation of
              malware, attacks on other websites, networks, and other IT infrastructures. Making use
              of Helmet and&nbsp;
              <strong>React Helmet</strong>
            </div>
          </ArticleWrap>
          <ArticleWrap
            title="Caching Capabilities"
            isLeft="true"
            subtitle="Web caching can reduce the delay for all objects, even objects that are not cached, since caching reduces the traffic and execution both."
          >
            <div className="image-wrapper">
              <Image
                src="/static/images/caching-capabilities.png"
                alt="caching capabilities"
                className="full-width"
              />
            </div>
            <List>
              <li>API and Page Response Caching with APICache and Redis.</li>
              <li>Increase your server’s throughput (RPS). </li>
              <li>Easy interface for cache rules and busting mechanisms.</li>
              <li>AB testing support.</li>
              <li>Browser level: Service worker cache and browser config.</li>
            </List>
          </ArticleWrap>
          <ArticleWrap
            title="Lazy loading"
            isLeft="true"
            className="grey"
            subtitle="React Suspense allows you to suspend components rendering until a condition is met."
          >
            <Para>
              To enable that, you need to wrap your component that will be suspended, with the
              Suspense component.
            </Para>
            <Prism language="javascript">
              {`import React, { Suspense } from 'react';
import PokemonList from './PokemonList';
import Loading from './Loading';

function App(props) {
	return (
		<Suspense fallback={<Loading />}>
			<PokemonList />
		</Suspense>
	);
}`}
            </Prism>
          </ArticleWrap>
          <ArticleWrap
            title="Dynamic Import"
            isLeft="true"
            subtitle="Next.js supports ES2020 dynamic import() for JavaScript"
          >
            <Para>
              Next.js supports ES2020 dynamic import() for JavaScript. With that, you could import
              JavaScript modules (inc. React Components) dynamically and work with them.
            </Para>
            <Prism language="javascript">
              {`import dynamic from 'next/dynamic'
const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/hello2'),
  { loading: () => <p>...</p> }
)

function Home() {
  return (
    <div>
      <Header />
      <DynamicComponentWithCustomLoading />
      <p>HOME PAGE is here!</p>
    </div>
  )
}

export default Home`}
            </Prism>
          </ArticleWrap>
          <ArticleWrap
            title="Performance & Accessibility cadence right from the start"
            isLeft="true"
            className="grey"
            subtitle="Threshold driven development is just TDD (test-driven development) applied to performance testing"
          >
            <List>
              <li>Site-speed with Lighthouse.</li>
              <li>
                Dockerized - Easy plug-in to the CI / CD pipeline. Just run
                <code>yarn perf</code>
              </li>
              <li>Performance thresholds on lighthouse metrics.</li>
              <li>Deep integration with Grafite and Grafana for continuous monitoring.</li>
              <li>Highly configurable.</li>
              <li>aXe, Built in inside lighthouse plugin.</li>
              <li>Local accessibility checker in a headless browser.</li>
            </List>
          </ArticleWrap>
        </div>
      </Layout>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  state,
  errorData: get(state, ['featuresPage', 'featuresPageData']),
});

export default enhance(FeaturesPage, {
  mapStateToProps,
  saga,
  reducer,
  key: 'featuresPage',
  initialActions,
});

export { FeaturesPage as FeaturesPageDisconnected };

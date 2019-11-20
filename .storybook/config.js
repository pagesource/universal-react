import 'react-app-polyfill/ie11';
import React from 'react';
import { configure, setAddon, addDecorator, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withDesign } from 'storybook-addon-designs';
import { withTests } from '@storybook/addon-jest';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'styled-components';
import Theme from '../app/styles/theme';
import '../app/styles/cssIncludes';
import GlobalStyles from '../app/styles';
import results from '../.jest-test-results.json';

addParameters({
  options: {
    name: `Universal React`,
    url:
      'https://tools.publicis.sapient.com/bitbucket-code-commons/projects/XTI/repos/universal-react/browse',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/GBCGqs11KNeUyPksQzEMw0hr/Wireframing/duplicate?node-id=0%3A1', // TODO: to be updated as per style guide later
  },
});

addDecorator(withKnobs);
addDecorator(withSmartKnobs);
addDecorator(withA11y);
addDecorator(withDesign);
addDecorator(
  withTests({
    results,
  })
);

addDecorator((storyFn, context) => (
  <React.Fragment>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>{withConsole()(storyFn)(context)}</ThemeProvider>
  </React.Fragment>
));

const req = require.context('../app/components', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

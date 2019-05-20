import 'react-app-polyfill/ie11';
import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { ThemeProvider } from 'styled-components';
import Theme from '../app/styles/theme';
import '../app/styles/cssIncludes';
import '../app/styles';

withOptions({
  name: `Universal React`,
  url:
    'https://tools.publicis.sapient.com/bitbucket-code-commons/projects/XTI/repos/universal-react/browse',
});

addDecorator(withKnobs);
addDecorator(withSmartKnobs);

addDecorator((storyFn, context) => (
  <ThemeProvider theme={Theme}>{withConsole()(storyFn)(context)}</ThemeProvider>
));

const req = require.context('../app/components', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import TopBanner from './index';

storiesOf('TopBanner', module)
  .add('', () => (<TopBanner>Hello TopBanner</TopBanner>));

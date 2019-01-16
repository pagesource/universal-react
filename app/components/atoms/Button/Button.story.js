// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module)
  .add('Secondary Button', () => <Button onClick={action('clicked')}>Secondary</Button>)
  .add('Disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Disabled
    </Button>
  ))
  .add('Primary Button', () => (
    <Button primary onClick={action('clicked')}>
      Primary
    </Button>
  ));

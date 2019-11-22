import React from 'react';
import { storiesOf } from '@storybook/react';
import FeatureBanner from './index';

storiesOf('FeatureBanner', module).add('FeatureBanner', () => {
  return <FeatureBanner heading="Universal React" className="myBanner" subheading="Sub Heading" />;
});

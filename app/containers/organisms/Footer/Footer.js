// @flow
import React from 'react';
import type { Node } from 'react';
import get from 'lodash/get';
import { connect } from 'react-redux';
import type { Props } from './types';

import FooterComponent from '../../../components/organisms/Footer';

const Footer = (props: Props): Node => <FooterComponent {...props} />;

const mapStateToProps = state => ({
  nav: get(state, ['global', 'globalData', 'labels', 'header', 'nav']),
});

export default connect(mapStateToProps)(Footer);

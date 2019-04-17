// @flow
import React from 'react';
import type { Node } from 'react';
import get from 'lodash/get';
import { connect } from 'react-redux';
import type { Props } from './types';

import HeaderComponent from '../../../components/organisms/Header';

const Header = (props: Props): Node => <HeaderComponent {...props} />;

const mapStateToProps = state => ({
  nav: get(state, ['global', 'globalData', 'labels', 'header', 'nav']),
});

export default connect(mapStateToProps)(Header);

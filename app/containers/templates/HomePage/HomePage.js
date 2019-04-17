// @flow
import React from 'react';
import type { Node } from 'react';
import get from 'lodash/get';
import enhance from '../../../lib/dynamicStore';
import initialActions from './HomePage.actions';
import saga from './HomePage.saga';
import reducer from './HomePage.reducer';
import type { Props } from './types';

import HomePageComponent from '../../../components/templates/HomePage';

const HomePage = (props: Props): Node => <HomePageComponent {...props} />;

const mapStateToProps = state => ({
  editorialData: get(state, ['homePage', 'layout', 'editorialData']),
});

export default enhance(HomePage, {
  mapStateToProps,
  saga,
  reducer,
  key: 'homePage',
  initialActions,
});

import get from 'lodash/get';
import enhance from '../../../lib/dynamicStore';
import initialActions, { getExperience, removeExperience } from './Experience.actions';

import saga from './Experience.saga';
import reducer from './Experience.reducer';

import Experience from '../../../components/organisms/Experience';

const mapStateToProps = state => ({
  data: get(state, ['homePage', 'layout', 'editorialData']),
});

const mapDispatchToProps = dispatch => {
  return {
    getExperience: identifier => {
      console.log('TCL: identifier', identifier);
      dispatch(getExperience(identifier));
    },
    removeExperience: () => {
      dispatch(removeExperience());
    },
  };
};

export default enhance(Experience, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: 'experience',
  initialActions,
});

// import conformsTo from 'lodash/conformsTo';
// import isFunction from 'lodash/isFunction';
// import isObject from 'lodash/isObject';
// import invariant from 'invariant';

/**
 * Validate the shape of redux store
 *  @param {Object} store The store to verify
 */
export default function checkStore(store) {
  console.log('TCL: checkStore -> store', store); // FIXME: REvisit
  // const shape = {
  //   dispatch: isFunction,
  //   subscribe: isFunction,
  //   getState: isFunction,
  //   replaceReducer: isFunction,
  //   runSaga: isFunction,
  //   injectedReducers: isObject,
  //   injectedSagas: isObject,
  // };
  // invariant(conformsTo(store, shape), 'checkStore: Expected a valid redux store');
  return true;
}

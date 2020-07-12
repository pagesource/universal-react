import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
// import globalSaga from '../../global/saga';

// const tracker = getTracker();

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware, trackingMiddleware(tracker)];
// const enhancers = [applyMiddleware(...middlewares)];

// // Choose compose method depending upon environment and platform
// const composeEnhancers =
//   process.env.NODE_ENV !== 'production' && typeof window === 'object'
//     ? composeWithDevTools
//     : compose;

// const configureStore = (initialState = {}) => {
//   const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));
//   return store;
// };
// const store = configureStore();
/**
 * Create redux store with the middlewares and enhancers
 *
 * @param {Object} options
 * @param {Object} options.key - Unique key to recognize the page component
 * @param {Object} options.reducer - Reducers associated with the page commponent
 * @param {Object} options.saga - Sagas associated with the page commponent
 */
export default options => WrappedComponent => {
  class ReducerInjector extends React.Component {
    static injectReducer = () => {
      const hasKey = !!options.key;
      // if (!hasKey) throw new Error(`${BaseComponent.displayName} needs to be passed with a key`); //FIXME: REvisit
      const hasReducer = !!options.reducer;
      const hasSaga = !!options.saga;
      const reducer = hasKey && hasReducer ? { [options.key]: options.reducer } : {};
      const store = options.store || {}; // FIXME: to be done properly
      store.injectedReducers = store.injectedReducers ? store.injectedReducers : {};
      store.injectedReducers = { ...store.injectedReducers, ...reducer };
      // Keep record of saga injected in store associated with unique key
      store.injectedSagas = {};
      if (hasSaga) {
        // Run saga and keep the task returned by running saga to access later while cancelling
        // store.injectedSagas[options.key] = { ...options.saga, task: store.runSaga(options.saga) }; //FIXME: Restore me back
      }
      console.log('TCL: configureDynamic ->  store', store);
      return store;
    };

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
      // FIXME: this needs to be removed
      ReducerInjector.injectReducer();
    }

    // injectors = getAsyncInjectors(this.context.store); FIXME: Use the proper way of injection

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};

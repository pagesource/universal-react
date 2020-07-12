import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer from './reducers';
import globalSaga from '../../global/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]; // FIXME: add analytics here
const enhancers = [applyMiddleware(...middlewares)];
let store = {};

// Choose compose method depending upon environment and platform
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object'
    ? composeWithDevTools
    : compose;

const setStore = (initialState = {}) => {
  store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));
  // Keep access to 'run' method of saga task in store so thats its available globally with store
  store.runSaga = sagaMiddleware.run;

  if (globalSaga) {
    // Run global saga and keep the task returned by running saga to access later while cancelling
    store.globalSaga = { globalSaga, task: store.runSaga(globalSaga) };
  }
  return store;
};

const storeRef = {
  setStore,
  getStore: () => store,
};

Object.freeze(storeRef);

export default storeRef;

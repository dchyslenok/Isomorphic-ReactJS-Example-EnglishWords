import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import middleware from './middleware';
import * as reducers from './reducers';

export default function create(initialState = {}) {
  const finalCreateStore = compose(
    applyMiddleware(middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )(createStore);

  return finalCreateStore(combineReducers({ ...reducers }), initialState);
}
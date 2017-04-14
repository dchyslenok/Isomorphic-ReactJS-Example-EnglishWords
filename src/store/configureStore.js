import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
// import middleware from './middleware';
import counterReducer from './reducers/counterReducer';
import thunk from 'redux-thunk';

export default function create(initialState = {}) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
  )(createStore);

  return finalCreateStore(combineReducers({counter: counterReducer}), initialState);
}
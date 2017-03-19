import { applyMiddleware, combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

export default function (initialState = {}) {
  const rootReducer = combineReducers({
    counter: counterReducer
  });

  return createStore(rootReducer, initialState);
}
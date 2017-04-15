'use strict';
import promise from 'es6-promise';
import 'isomorphic-fetch';
import actions from '../../actions';
import { actionTypes } from '../../actions/types';

export default function middleware(store) {
  return (next) => (action) => {
    const state = store.getState();

    switch (action.type) {
      case actionTypes.ACTIVE_PAGE_HOME:
        if (!state.root.themeCards.length) {
          store.dispatch(actions.themeListRequest());
          fetch('http://englishwords/api_v1/categorie')
            .then((response) => {
              return response.json();
            })
            .then((cards) => {
              store.dispatch(actions.themeListRequestSuccess(cards));
            })
            .catch(() => {
              store.dispatch(actions.themeListRequestFailed());
            });
        }
        break;

      default:
        break;
    }
    return next(action);
  };
};
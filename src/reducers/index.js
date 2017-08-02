import Immutable from 'seamless-immutable';
import { actionTypes } from '../actions/types';

const initialState = Immutable({
  themeCards: [],
  wordCards: [],
  themeSelectedId: null,
  isLoading: false,
});

export function root(state = initialState, payload) {
  switch (payload.type) {
    case actionTypes.THEMES_REQUEST_SUCCESS:
      return Immutable.merge(state, { themeCards: payload.themeCards, isLoading: false });

    case actionTypes.WORDS_REQUEST_SUCCESS:
      return Immutable.merge(state, { wordCards: payload.wordCards, isLoading: false });

    case actionTypes.THEME_SELECT:
      return Immutable.set(state, 'themeSelectedId', payload.id);

    case actionTypes.THEMES_REQUEST:
      return Immutable.set(state, 'isLoading', true);

    case actionTypes.WORDS_REQUEST:
      return Immutable.set(state, 'isLoading', true);

    default:
      return state;
  }
}

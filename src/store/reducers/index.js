import { actionTypes } from '../../actions/types';

const initialState = {
  themeCards: [],
  wordCards: [],
  themeSelectedId: null,
};

export function root(state = initialState, action) {
  switch (action.type) {
    case actionTypes.THEMES_REQUEST_SUCCESS:
      return { ...state, themeCards: action.themeCards };

    case actionTypes.WORDS_REQUEST_SUCCESS:
      return { ...state, wordCards: action.wordCards };

    case actionTypes.THEME_SELECT:
      return { ...state, themeSelectedId: action.id };

    default:
      return state;
  }
}

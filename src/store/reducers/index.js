import { actionTypes } from '../../actions/types';

const initialState = {
  themeCards: [],
  wordCards: [],
  themeSelectedId: null,
  isLoading: false,
};

export function root(state = initialState, action) {
  switch (action.type) {
    case actionTypes.THEMES_REQUEST_SUCCESS:
      return { ...state, themeCards: action.themeCards, isLoading: false };

    case actionTypes.WORDS_REQUEST_SUCCESS:
      return { ...state, wordCards: action.wordCards, isLoading: false };

    case actionTypes.THEME_SELECT:
      return { ...state, themeSelectedId: action.id };

    case actionTypes.THEMES_REQUEST:
      return { ...state, isLoading: true };

    case actionTypes.WORDS_REQUEST:
      return { ...state, isLoading: true };

    default:
      return state;
  }
}

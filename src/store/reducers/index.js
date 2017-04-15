import { actionTypes } from '../../actions/types';

const initialState = {
  themeCards: [],
  wordCards: [],
};

export function root(state = initialState, action) {
  switch (action.type) {
    case actionTypes.THEME_LIST_REQUEST_SUCCESS:
      return { ...state, themeCards: action.themeCards };

    case actionTypes.WORDS_REQUEST_SUCCESS:
      return { ...state, wordCards: action.wordCards };

    default:
      return state;
  }
}

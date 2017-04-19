import { actionTypes } from './types';

module.exports = {
  activePageHome: () => {
    return { type: actionTypes.ACTIVE_PAGE_HOME };
  },

  themesRequest: () => {
    return { type: actionTypes.THEMES_REQUEST };
  },

  themesRequestSuccess: (themeCards) => {
    return { type: actionTypes.THEMES_REQUEST_SUCCESS, themeCards };
  },

  themesRequestFailed: () => {
    return { type: actionTypes.THEMES_REQUEST_FAILED };
  },

  themeSelect: (id) => {
    return { type: actionTypes.THEME_SELECT, id };
  },

  wordsRequest: () => {
    return { type: actionTypes.WORDS_REQUEST };
  },

  wordsRequestSuccess: (wordCards) => {
    return { type: actionTypes.WORDS_REQUEST_SUCCESS, wordCards };
  },

  wordsRequestFailed: () => {
    return { type: actionTypes.WORDS_REQUEST_FAILED };
  },
};
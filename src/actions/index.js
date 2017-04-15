import { actionTypes } from './types';

module.exports = {
  activePageHome: () => {
    return { type: actionTypes.ACTIVE_PAGE_HOME };
  },

  themeListRequest: () => {
    return { type: actionTypes.THEME_LIST_REQUEST };
  },

  themeListRequestSuccess: (themeCards) => {
    return { type: actionTypes.THEME_LIST_REQUEST_SUCCESS, themeCards };
  },

  themeListRequestFailed: () => {
    return { type: actionTypes.THEME_LIST_REQUEST_FAILED };
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
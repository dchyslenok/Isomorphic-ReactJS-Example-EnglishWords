import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
  ACTIVE_PAGE_HOME: null,
  ACTIVE_PAGE_GAME: null,
  ACTIVE_PAGE_THEME: null,
  THEME_LIST_REQUEST: null,
  THEME_LIST_REQUEST_SUCCESS: null,
  THEME_LIST_REQUEST_FAILED: null,
  WORDS_REQUEST: null,
  WORDS_REQUEST_SUCCESS: null,
  WORDS_REQUEST_FAILED: null,
});

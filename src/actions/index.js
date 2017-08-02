import { actionTypes } from './types';
import API from '../shared/api';


const themesRequest = () => ({
  type: actionTypes.THEMES_REQUEST,
});

const themesRequestSuccess = themeCards => ({
  type: actionTypes.THEMES_REQUEST_SUCCESS, themeCards,
});

const themesRequestFailed = () => ({
  type: actionTypes.THEMES_REQUEST_FAILED,
});

const wordsRequest = () => ({
  type: actionTypes.WORDS_REQUEST,
});

const wordsRequestSuccess = wordCards => ({
  type: actionTypes.WORDS_REQUEST_SUCCESS, wordCards,
});

const wordsRequestFailed = () => ({
  type: actionTypes.WORDS_REQUEST_FAILED,
});

const themeSelected = id => ({
  type: actionTypes.THEME_SELECT, id,
});

const themeSelect = id => (
  (dispatch) => {
    dispatch(wordsRequest());

    API.card.byThemeId(id).then((data) => {
      if (!data) {
        dispatch(wordsRequestFailed());
        return;
      }
      dispatch(wordsRequestSuccess(data));
      dispatch(themeSelected(id));
    });
  }
);

const activePageHome = () => (dispatch, getState) => {
  if (!getState().root.themeCards.length) {
    dispatch(themesRequest());

    API.theme.getAll().then((data) => {
      if (!data) {
        dispatch(themesRequestFailed());
        return;
      }
      dispatch(themesRequestSuccess(data));
    });
  }

  dispatch({
    type: actionTypes.ACTIVE_PAGE_HOME,
  });
};

export {
  activePageHome,
  themesRequest,
  themesRequestSuccess,
  themesRequestFailed,
  themeSelect,
  wordsRequest,
  wordsRequestSuccess,
  wordsRequestFailed,
};
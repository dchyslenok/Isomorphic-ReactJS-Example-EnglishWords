import actions from '../../actions';
import { actionTypes } from '../../actions/types';
import API from '../../shared/api';

export default function middleware(store) {
  return (next) => (action) => {
    const state = store.getState();

    switch (action.type) {
      case actionTypes.ACTIVE_PAGE_HOME:
        if (!state.root.themeCards.length) {
          store.dispatch(actions.themesRequest());
          API.theme.getAll().then(data => {
            if (!data) {
              store.dispatch(actions.themesRequestFailed());
              return false;
            }
            store.dispatch(actions.themesRequestSuccess(data));
          });
        }
        break;

      case actionTypes.THEME_SELECT:
        store.dispatch(actions.wordsRequest());
        API.card.byThemeId(action.id).then(data => {
          if (!data) {
            store.dispatch(actions.wordsRequestFailed());
            return false;
          }
          store.dispatch(actions.wordsRequestSuccess(data));
        });
        break;
      default:
        break;
    }
    return next(action);
  };
}

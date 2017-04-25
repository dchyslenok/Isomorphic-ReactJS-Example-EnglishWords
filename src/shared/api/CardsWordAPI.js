import promise from 'es6-promise';
import 'isomorphic-fetch';

export default class CardsWordAPI {

  byThemeId(id) {
    return fetch(`http://englishwords.chyslenok.com/api_v1/word/byCategorieId/${id}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(() => {
        return false;
      });
  }
}
